class Api::V1::CategoriesController < ApplicationController
  before_action :set_matrix, only: [:index]

  def index
    categories = Category.where(matrix: @matrix)

    render status: :ok, json: categories
  end

  private

  def set_matrix
    @matrix = Matrix.find(params[:matrix_id])
  end
end


