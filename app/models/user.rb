# == Schema Information
#
# Table name: users
#
#  id         :integer         not null, primary key
#  name       :string(255)
#  last_name  :string(255)
#  email      :string(255)
#  username   :string(255)
#  ref_id     :integer
#  created_at :datetime
#  updated_at :datetime
#

class User < ActiveRecord::Base
  attr_accessible :name, :last_name, :email, :username
  
  email_regex = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  
  validates :name, :presence => true, :length   => { :maximum => 20 }
  
  validates :last_name, :presence => true :length   => { :maximum => 20 }
  
  validates :email, :presence => true, :format   => { :with => email_regex }, :uniqueness => { :case_sensitive => false }
  
  
end
