class Matrix < ApplicationRecord
  belongs_to :user
  has_many :tasks, dependent: :destroy
  has_many :categories, dependent: :destroy
end
