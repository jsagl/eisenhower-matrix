class Api::V1::MatricesController < ApplicationController
  before_action :set_matrix, only: [:update, :destroy]

  def index
    matrices = Matrix.where(user: current_user).order(:name)

    render status: :ok, json: matrices
  end

  def create
    matrix = Matrix.create(name: permitted_params[:name], user: current_user)

    render status: :created, json: matrix
  end

  def update
    @matrix.update(permitted_params)

    render status: :ok, json: @matrix
  end

  def destroy
    @matrix.destroy

    head :no_content
  end

  private

  def set_matrix
    @matrix = Matrix.find(params[:id])
  end

  def permitted_params
    params.permit(:name)
  end
end




