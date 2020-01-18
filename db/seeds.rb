# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Task.destroy_all
Category.destroy_all
Matrix.destroy_all

user = User.create(email: 'jean@gmail.com', password: '123456')

matrix1 = Matrix.create(user: user, name: 'Perso')
matrix2 = Matrix.create(user: user, name: 'Pro')

Category.create(matrix: matrix1, name: 'Business plan', color: '#f9ed69')
Category.create(matrix: matrix2, name: 'Business plan', color: '#f9ed69')
Category.create(matrix: matrix1, name: 'Communication', color: '#f08a5d')
Category.create(matrix: matrix2, name: 'Communication', color: '#f08a5d')
Category.create(matrix: matrix1, name: 'CSM', color: '#1fab89')
Category.create(matrix: matrix2, name: 'CSM', color: '#1fab89')

categories1 = Category.all.where(matrix_id: matrix1.id)
categories2 = Category.all.where(matrix_id: matrix2.id)

12.times do
  Task.create(matrix: matrix1, category: categories1.sample, name: Faker::Book.title, description: Faker::Books::Dune.quote, status: (0..5).to_a.sample, due_date: Date.today + (1..30).to_a.sample.days,
    time_to_complete: [15, 30, 60, 120, 180].sample
  )
end

12.times do
  Task.create(matrix: matrix2, category: categories2.sample, name: Faker::Book.title, description: Faker::Books::Dune.quote, status: (0..5).to_a.sample, due_date: Date.today + (1..30).to_a.sample.days,
    time_to_complete: [15, 30, 60, 120, 180].sample
  )
end

