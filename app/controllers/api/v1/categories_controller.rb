class Api::V1::CategoriesController < ApplicationController
  before_action :set_matrix, only: [:index]
  before_action :set_category, only: [:update]

  def index
    categories = Category.where(matrix: @matrix)

    render status: :ok, json: categories
  end

  def create
    category = Category.create(permitted_params)

    render status: :created, json: category
  end

  def update
    @category.update(permitted_params)

    render status: :ok, json: @category
  end

  private

  def set_matrix
    @matrix = Matrix.find(params[:matrix_id])
  end

  def set_category
    @category = Category.find(params[:id])
  end

  def permitted_params
    params.permit(:name, :color, :matrix_id)
  end
end


