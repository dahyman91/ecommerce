
puts 'Deleting Users'

User.destroy_all

puts 'Creating Products'



Product.destroy_all

Product.create(
    name: 'Pants',
    price: 20,
    description: 'Trousers (British English), slacks, or pants are an item of clothing that might have originated in Central Asia, worn from the waist to the ankles, covering both legs separately (rather than with cloth extending across both legs as in robes, skirts, and dresses).',
    category: 'Clothing',
    primary_image:
      'https://source.unsplash.com/random/?pants',
    secondary_image: 'https://source.unsplash.com/random/?shoe'
  )

  Product.create(
    name: "Shirt",
    price: 17,
    description: "A shirt is a cloth garment for the upper body (from the neck to the waist).Originally an undergarment worn exclusively by men, it has become, in American English, a catch-all term for a broad variety of upper-body garments and undergarments. In British English, a shirt is more specifically a garment with a collar, sleeves with cuffs, and a full vertical opening with buttons or snaps (North Americans would call that a 'dress shirt', a specific type of collared shirt). A shirt can also be worn with a necktie under the shirt collar.",
    category: "Clothing",
    primary_image:
      'https://source.unsplash.com/random/?shirt',
    secondary_image: 'https://source.unsplash.com/random/?shoe'
  )

  Product.create(
    name: "Jacket",
    price: 40,
    description: 'A jacket is a garment for the upper body, usually extending below the hips. A jacket typically has sleeves, and fastens in the front or slightly on the side. A jacket is generally lighter, tighter-fitting, and less insulating than a coat, which is outerwear. Some jackets are fashionable, while others serve as protective clothing. Jackets without sleeves are vests.',
    category: "Clothing",
    primary_image:
      'https://source.unsplash.com/random/?jacket',
    secondary_image: 'https://source.unsplash.com/random/?shoe'
  )
  Product.create(
    name: "Socks",
    price: 7,
    description: 'A sock is a piece of clothing worn on the feet and often covering the ankle or some part of the calf. Some type of shoe or boot is typically worn over socks. In ancient times, socks were made from leather or matted animal hair. In the late 16th century, machine-knit socks were first produced. Until 1800 both hand knitting and machine knitting were used to produce socks, but after 1800, machine knitting became the predominant method.',
    category: "Clothing",
    primary_image:
      'https://source.unsplash.com/random/?socks',
    secondary_image: 'https://source.unsplash.com/random/?shoe'
  )

  Product.create(
    name: "Hat",
    price: 15,
    description: 'A hat is a head covering which is worn for various reasons, including protection against weather conditions, ceremonial reasons such as university graduation, religious reasons, safety, or as a fashion accessory.',
    category: "Clothing",
    primary_image:
      'https://source.unsplash.com/random/?hat',
    secondary_image: 'https://source.unsplash.com/random/?shoe'
  )

  Product.create(
    name: "Computer",
    price: 700,
    description: 'A computer is a machine that can be programmed to carry out sequences of arithmetic or logical operations automatically. Modern computers can perform generic sets of operations known as programs. These programs enable computers to perform a wide range of tasks. A computer system is a "complete" computer that includes the hardware, operating system (main software), and peripheral equipment needed and used for "full" operation.',
    category: "Electronics",
    primary_image:
      'https://source.unsplash.com/random/?computer',
    secondary_image: 'https://source.unsplash.com/random/?shoe'
  )

  Product.create(
    name: "Television",
    price: 500,
    description: 'Television, sometimes shortened to TV or telly, is a telecommunication medium used for transmitting moving images in black-and-white or in color, and in two or three dimensions and sound. The term can refer to a television set, a television show, or the medium of television transmission. Television is a mass medium for advertising, entertainment, news, and sports.',
    category: "Electronics",
    primary_image:
      'https://source.unsplash.com/random/?television',
    secondary_image: 'https://source.unsplash.com/random/?shoe'
  )

  Product.create(
    name: "Cake",
    price: 15,
    description: 'Cake is a form of sweet food made from flour, sugar, and other ingredients, that is usually baked. In their oldest forms, cakes were modifications of bread, but cakes now cover a wide range of preparations that can be simple or elaborate, and that share features with other desserts such as pastries, meringues, custards, and pies.',
    category: "Food",
    primary_image:
      'https://source.unsplash.com/random/?cake',
    secondary_image: 'https://source.unsplash.com/random/?shoe'
  )

  Product.create(
    name: "Pizza",
    price: 15,
    description: 'Pizza (Italian: [pittsa], Neapolitan: [pittsə]) is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, pineapple, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven.[1] A small pizza is sometimes called a pizzetta. A person who makes pizza is known as a pizzaiolo.',
    category: "Food",
    primary_image:
      'https://source.unsplash.com/random/?pizza',
    secondary_image: 'https://source.unsplash.com/random/?shoe'
  )




# puts 'Creating Product Instances'
# ProductInstance.create(
#   user_id: User.all.sample.id,
#   product_id: Product.all.sample.id,
#   quantity: 1
# )
