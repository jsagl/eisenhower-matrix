class Api::V1::TasksController < ApplicationController
  before_action :set_matrix

  def index
    tasks = Task.where(matrix: @matrix)

    render status: :ok, json: tasks
  end

  private

  def set_matrix
    @matrix = Matrix.find(params[:matrix_id])
  end
end

