class Product < ApplicationRecord
  belongs_to :order
  validates :order, presence: true
end
