class Api::V1::ParamsFormatters::TaskParamsFormatter
  class << self
    def call(params)
      {
          name: params[:name],
          description: params[:description],
          status: params[:status],
          due_date: format_date(params[:due_date]),
          time_to_complete: params[:time_to_complete],
          matrix_id: params[:matrix_id],
          category_id: params[:category_id]
      }
    end

    def format_date(date)
      date ? Date.parse(date) : Date.today
    end
  end
end