class Api::V1::ParamsFormatters::TaskParamsFormatter
  class << self
    def call(params)
      {
          name: params[:name],
          description: params[:description],
          status: params[:status],
          matrix_id: params[:matrix_id],
          category_id: params[:category_id],
          due_date: format_date(params[:due_date])
      }
    end

    def format_date(date)
      date ? Date.parse(date) : Date.today
    end
  end
end