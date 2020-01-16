class Task < ApplicationRecord
  belongs_to :matrix

  class Status
    UNASSIGNED = 0
    IMPORTANT_URGENT = 1
    IMPORTANT_NOT_URGENT = 2
    NOT_IMPORTANT_URGENT = 3
    NOT_IMPORTANT_NOT_URGENT = 4
    DONE = 5
  end
end
