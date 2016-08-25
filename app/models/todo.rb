# == Schema Information
#
# Table name: todos
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  body       :text             not null
#  done       :boolean
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Todo < ActiveRecord::Base
  has_many :steps
end
