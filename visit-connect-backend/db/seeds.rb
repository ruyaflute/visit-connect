# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# Patients
patient1 = User.create(last_name: 'Smith', first_name: 'Judy', email: 'judysmith@email.com', role: 'patient', city: 'New York', zip_code: 11111)
patient2 = User.create(last_name: 'Cumberbatch', first_name: 'Benedict', email: 'benny@email.com', role: 'patient', city: 'New York', zip_code: 11111)

# Volunteers
volunteer1 = User.create(last_name: 'Butterworth', first_name: 'Agnus', email: 'abutterworth@email.com', role: 'volunteer', city: 'New York', zip_code: 11111)
volunteer2 = User.create(last_name: 'Cumberbatch', first_name: 'Luke', email: 'luke@email.com', role: 'volunteer', city: 'Jersey City', zip_code: 22222)

