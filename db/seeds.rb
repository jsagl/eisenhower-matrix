# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Task.destroy_all
Matrix.destroy_all

user = User.create(email: 'jean@gmail.com', password: '123456')

matrix1 = Matrix.create(user: user, name: 'Perso')
matrix2 = Matrix.create(user: user, name: 'Pro')

7.times do
  Task.create(matrix: matrix1, name: Faker::Book.title, description: Faker::Books::Dune.quote, status: (0..5).to_a.sample, due_date: Date.today + (1..30).to_a.sample.days)
end

7.times do
  Task.create(matrix: matrix2, name: Faker::Book.title, description: Faker::Books::Dune.quote, status: (0..5).to_a.sample, due_date: Date.today + (1..30).to_a.sample.days)
end