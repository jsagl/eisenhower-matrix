class Api::V1::TasksController < ApplicationController
  before_action :set_matrix
  before_action :set_task, only: [:update]

  def index
    tasks = Task.where(matrix: @matrix)

    render status: :ok, json: tasks
  end

  def create
    task = Task.create(formatted_task_params)

    render status: :created, json: task
  end

  def update
    @task.update(permitted_params)

    render status: :ok, json: @task
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

