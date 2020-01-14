class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :name
      t.text :description
      t.date :due_date
      t.integer :status
      t.references :matrix, null: false, foreign_key: true

      t.timestamps
    end
  end
end
