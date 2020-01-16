class Api::V1::ParamsFormatters::TaskParamsFormatter
  class << self
    def call(params)
      {
          name: params[:name],
          description: params[:description],
          status: params[:status],
          matrix_id: params[:matrix_id]
      }
    end
  end
end