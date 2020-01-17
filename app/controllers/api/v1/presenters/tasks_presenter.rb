class Api::V1::Presenters::TasksPresenter
  class << self
    def call(tasks)
      tasks.includes(:category).map { |task| Api::V1::Presenters::TaskPresenter.call(task) }
    end
  end
end
