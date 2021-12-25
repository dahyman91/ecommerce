


puts 'Creating Users'



User.create(
  first_name: 'Dan',
  last_name: 'Hyman',
  email: 'dahyman91@gmail.com'
)



puts 'Creating Products'


10.times do
  Product.create(
    name: Faker::Book.title,
    price: Faker::Number.decimal(l_digits: 2),
    description: Faker::TvShows::Seinfeld.quote,
    category: Faker::TvShows::Seinfeld.business,
    primary_image:
      'https://media.istockphoto.com/photos/stack-of-white-tissue-paper-rolls-picture-id499224059?k=20&m=499224059&s=612x612&w=0&h=sy1n4QyMiUkxz9-eNZ4DJsG1mn4VJXwc5kaJgsGUAgY=',
    secondary_image: ''
  )
end

puts 'Creating Product Instances'
ProductInstance.create(
  user_id: User.all.sample.id,
  product_id: Product.all.sample.id,
  quantity: 1
)
