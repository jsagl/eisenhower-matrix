class Category < ApplicationRecord
  belongs_to :matrix
  has_many :tasks
end
