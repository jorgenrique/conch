class CreateUsers < ActiveRecord::Migration
  def self.up
    create_table :users do |t|
      t.string :name
      t.string :last_name
      t.string :email
      t.string :username
      t.integer :ref_id

      t.timestamps
    end
  end

  def self.down
    drop_table :users
  end
end
