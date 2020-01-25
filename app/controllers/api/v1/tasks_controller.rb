class Api::V1::TasksController < ApplicationController
  before_action :set_matrix, only: [:index]
  before_action :set_task, only: [:update, :destroy]

  def index
    if query_params
      tasks = Task.where(matrix: @matrix).order('due_date ASC NULLS LAST, time_to_complete ASC')
                  .overall_search(query_params)
    else
      tasks = Task.where(matrix: @matrix).order('due_date ASC NULLS LAST, time_to_complete ASC')
    end

    render status: :ok, json: Api::V1::Presenters::TasksPresenter.call(tasks)
  end

  def create
    task = Task.create(formatted_task_params)

    render status: :created, json: Api::V1::Presenters::TaskPresenter.call(task)
  end

  def update
    @task.update(formatted_task_params)

    render status: :ok, json: Api::V1::Presenters::TaskPresenter.call(@task)
  end

  def destroy
    @task.destroy

    head :no_content
  end

  private

  def set_matrix
    @matrix = Matrix.find(params[:matrix_id])
  end

  def set_task
    @task = Task.find(params[:id])
  end

  def permitted_params
    params.permit(:name, :description, :due_date, :time_to_complete, :matrix_id, :category_id, :status)
  end

  def query_params
    query = params.permit(:query)

    if query[:query]
      query[:query].gsub!(/15(min|mi|m)/, '15')
      query[:query].gsub!(/30(min|mi|m)/, '30')
      query[:query].gsub!(/1h/, '60')
      query[:query].gsub!(/2h\W/, '180')
      query[:query].gsub!(/2h/, '120')
    end

    return query[:query]
  end

  def formatted_task_params
    Api::V1::ParamsFormatters::TaskParamsFormatter.call(permitted_params)
  end
end

