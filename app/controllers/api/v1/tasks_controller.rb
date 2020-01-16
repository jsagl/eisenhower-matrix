class Api::V1::TasksController < ApplicationController
  before_action :set_matrix, only: [:index]
  before_action :set_task, only: [:update, :destroy]

  def index
    tasks = Task.where(matrix: @matrix).includes(:category)

    formatted_tasks = tasks.map do |task|
      {
          id: task.id,
          name: task.name,
          description: task.description,
          due_date: task.due_date,
          status: task.status,
          created_at: task.created_at,
          category: task.category.name,
          category_color: task.category.color
      }
    end

    render status: :ok, json: formatted_tasks
  end

  def create
    task = Task.create(formatted_task_params)

    render status: :created, json: task
  end

  def update
    @task.update(permitted_params)

    render status: :ok, json: @task
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
    params.permit(:name, :description, :due_date, :matrix_id, :status)
  end

  def formatted_task_params
    Api::V1::ParamsFormatters::TaskParamsFormatter.call(permitted_params)
  end
end

