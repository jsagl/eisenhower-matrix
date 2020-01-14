class MatricesController < ApplicationController
  def show
    if params[:id].blank?
      redirect_to matrix_path(Matrix.where(user: current_user).first)
    else
      @matrix = Matrix.find(params[:id])
      @matrices = Matrix.where(user: current_user)
    end
  end
end
