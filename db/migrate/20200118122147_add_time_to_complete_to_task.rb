class AddTimeToCompleteToTask < ActiveRecord::Migration[6.0]
  def change
    add_column :tasks, :time_to_complete, :integer
  end
end
