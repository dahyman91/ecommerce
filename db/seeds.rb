
puts 'Creating Users'

# User.create(
#   first_name: 'Dan',
#   last_name: 'Hyman',
#   email: 'dahyman91@gmail.com'
# )

puts 'Creating Products'


100.times do
  Product.create(
    name: Faker::Book.title,
    price: Faker::Number.decimal(l_digits: 2),
    description: Faker::TvShows::Seinfeld.quote,
    category: Faker::TvShows::Seinfeld.business,
    primary_image:
      'https://source.unsplash.com/random/?shoe',
    secondary_image: 'https://source.unsplash.com/random/?shoe'
  )
end
Product.create(
    name: Faker::Book.title,
    price: Faker::Number.decimal(l_digits: 2),
    description: Faker::TvShows::Seinfeld.quote,
    category: Faker::TvShows::Seinfeld.business,
    primary_image:
      'https://source.unsplash.com/random/?shoe',
    secondary_image: 'https://source.unsplash.com/random/?shoe'
  )

  Product.create(
    name: Faker::Book.title,
    price: Faker::Number.decimal(l_digits: 2),
    description: Faker::TvShows::Seinfeld.quote,
    category: Faker::TvShows::Seinfeld.business,
    primary_image:
      'https://source.unsplash.com/random/?shirt',
    secondary_image: 'https://source.unsplash.com/random/?shoe'
  )


# puts 'Creating Product Instances'
# ProductInstance.create(
#   user_id: User.all.sample.id,
#   product_id: Product.all.sample.id,
#   quantity: 1
# )
