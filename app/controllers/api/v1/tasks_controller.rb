class Api::V1::TasksController < ApplicationController
  before_action :set_matrix, only: [:index]
  before_action :set_task, only: [:update, :destroy]

  def index
    tasks = Task.where(matrix: @matrix)

    render status: :ok, json: Api::V1::Presenters::TasksPresenter.call(tasks)
  end

  def create
    task = Task.create(formatted_task_params)

    render status: :created, json: Api::V1::Presenters::TaskPresenter.call(task)
  end

  def update
    @task.update(permitted_params)

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

  def formatted_task_params
    Api::V1::ParamsFormatters::TaskParamsFormatter.call(permitted_params)
  end
end

