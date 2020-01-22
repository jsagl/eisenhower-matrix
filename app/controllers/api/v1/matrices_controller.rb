class Api::V1::MatricesController < ApplicationController
  def index
    matrices = Matrix.where(user: current_user)

    render status: :ok, json: matrices
  end
end




