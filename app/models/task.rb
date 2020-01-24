class Task < ApplicationRecord
  include PgSearch::Model
  belongs_to :matrix
  belongs_to :category

  class Status
    UNASSIGNED = 0
    IMPORTANT_URGENT = 1
    IMPORTANT_NOT_URGENT = 2
    NOT_IMPORTANT_URGENT = 3
    NOT_IMPORTANT_NOT_URGENT = 4
    DONE = 5
  end

  pg_search_scope :overall_search,
                  against: {name: 'A', description: 'C' },
                  associated_against: { category: {name: 'B'} },
                  ignoring: :accents,
                  using: {
                      tsearch: { prefix: true, any_word: true},
                  }
end


#pg_search_scope :main_search,
#                against: { title: 'A', punchline: 'C', tags: 'B' },
#                associated_against: { categories: { name: 'D'} },
#                ignoring: :accents,
#                using: {
#                    tsearch: { dictionary: "french",
#                               prefix: true,
#                               any_word: true,
#                    }
#                }