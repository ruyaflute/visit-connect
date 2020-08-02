class CreateVisits < ActiveRecord::Migration[6.0]
  def change
    create_table :visits do |t|
      t.string :patient_id
      t.string :volunteer_id
      t.string :purpose
      t.datetime :datetime

      t.timestamps
    end
  end
end
