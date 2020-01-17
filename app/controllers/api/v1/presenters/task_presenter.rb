class Api::V1::Presenters::TaskPresenter
  class << self
    def call(task)
      category = task.category

      {
          id: task.id,
          name: task.name,
          status: task.status,
          description: task.description,
          due_date: task.due_date,
          created_at: task.created_at,
          updated_at: task.updated_at,
          matrix_id: task.matrix_id,
          category_id: task.category_id,
          category: category.name,
          color: category.color,
      }
    end
  end
end