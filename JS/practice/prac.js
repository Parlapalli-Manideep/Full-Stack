const raspberryCards = [{
    image: 'https://borgat.com/images/products/Gummies/100g/rnb.png',
    title: 'Raspberry Gummies',
    description: 'Soft and chewy raspberry gummies bursting with flavor.',
    price: '$4.99'
  },
  {
    image: 'https://i.ebayimg.com/images/g/EH0AAOSwD75fRoau/s-l400.jpg',
    title: 'Raspberry Jelly Beans',
    description: 'Delicious raspberry-flavored jelly beans with a sweet center.',
    price: '$3.99'
  },
  {
    image: 'https://www.treasureislandsweets.co.uk/user/products/large/zoom-blue-raspberry-lolly-tongue-painter.jpg',
    title: 'Raspberry Lollipops',
    description: 'Tangy and sweet raspberry lollipops, perfect for any occasion.',
    price: '$2.49'
  },
  {
    image: 'https://m.media-amazon.com/images/I/41Gw1mB6h8L.AC_UF894,1000_QL80.jpg',
    title: 'Raspberry Hard Candies',
    description: 'Long-lasting raspberry hard candies with an intense flavor.',
    price: '$5.49'
  },
  {
    image: 'https://www.snackandbakery.com/ext/resources/2024/12/04/hi-chew-blue-raspberry.jpg?height=635&t=1733345390&width=1200',
    title: 'Raspberry Chews',
    description: 'Chewy raspberry candies for a quick fruity treat.',
    price: '$3.49'
  },
  {
    image: 'https://beerntsens.com/wp-content/uploads/raspberry_filled.jpg',
    title: 'Raspberry Caramels',
    description: 'Rich caramels infused with a delightful raspberry twist.',
    price: '$6.99'
  },
  {
    image: 'https://feastingonfruit.com/wp-content/uploads/2024/05/Chocolate-Raspberry-Tarts-8.jpg',
    title: 'Raspberry Chocolate Bites',
    description: 'Decadent dark chocolate bites with a raspberry filling.',
    price: '$7.99'
  },
  {
    image: 'https://i.ebayimg.com/images/g/Fj8AAOSwsKZl1Iv3/s-l400.png',
    title: 'Raspberry Sours',
    description: 'Tangy and sour raspberry candies that pack a punch.',
    price: '$4.49'
  },
  {
    image: 'https://www.ghirardelli.com/media/catalog/product/6/1/61868_base.jpeg?width=265&height=265&canvas=265,265&quality=80&fit=bounds',
    title: 'Raspberry Fudge Squares',
    description: 'Creamy fudge squares with a raspberry swirl.',
    price: '$8.49'
  },
  {
    image: 'https://nesweettreats.co.uk/cdn/shop/files/Photo-1712417024947.jpg?v=1712428678&width=1946',
    title: 'Raspberry Marshmallows',
    description: 'Fluffy marshmallows with a hint of raspberry flavor.',
    price: '$5.99'
  },
  {
    image: 'https://p16-oec-ttp.tiktokcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/5c4f3f19a78d4520987b2b2603486eb0~tplv-omjb5zjo8w-resize-jpeg:800:800.jpeg?from=1826719393',
    title: 'Raspberry Candy Canes',
    description: 'Festive raspberry-flavored candy canes for the holidays.',
    price: '$3.99'
  },
  {
    image: 'https://cdn11.bigcommerce.com/s-p82jn6co/images/stencil/1280x1280/products/9959/54551/44843-waterbridge-fruit-pastilles-pouch-175g__02974.1707342684.jpg?c=2',
    title: 'Raspberry Pastilles',
    description: 'Classic raspberry pastilles for a refined sweet experience.',
    price: '$4.99'
  }
];
const allCards = document.getElementsByTagName("div")[0]

for (let i = 0; i < raspberryCards.length; i++) {
    const x = raspberryCards[i];
    const card = document.createElement("div");
    card.innerHTML = `
        <img src="${x.image}" alt="${x.title}"> 
        <p>${x.title}</p>
        <p>${x.description}</p>
        <p>Price: ${x.price}</p>
        <button>Add to cart</button>
        <button>Buy Now</button>
    `;
    card.className = "card";
    allCards.appendChild(card);

    addToCartBtn = card.getElementsByTagName("button")[0];
    addToCartBtn.addEventListener("click", () => {
        addToCart(i);
    });
    buyNowBtn = card.getElementsByTagName("button")[1]
    buyNowBtn.addEventListener("click",()=>{
      location.href = "./pracCart.html"
    })
}

function addToCart(index) {
      let found = true
      items = JSON.parse(localStorage.getItem("items")) || []
      for(i = 0 ; i < items.length ;i++)
      {
        if(items[i].title === raspberryCards[index].title)
        {
          items[i].count++;
          found =  false
        }
      }
      if(found){
      items.push({
        ...raspberryCards[index],
         count : 1
      })
    }
      localStorage.setItem("items",JSON.stringify(items))
}
