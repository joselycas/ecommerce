# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create([
  {name: "Donna Karen", email: "donna@gmail.com", password_digest: "dkny"},
  {name: "Paris McCall", email: "paris@gmail.com", password_digest: "ohhhi"},
  {name: "London Little", email: "london@gmail.com", password_digest: "forever"}
  ])
