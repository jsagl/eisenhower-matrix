class WakersController < ApplicationController
  def index
    render status: :ok, json: {}
  end
end
