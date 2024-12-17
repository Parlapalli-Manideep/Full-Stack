// const candyCards = [
//     {
//         image: 'https://thefudgeshoppe.com/cdn/shop/products/germanraspberries.jpg?v=1672668441&width=2048',
//         title: 'Raspberry Candies',
//         description: 'Delightful soft Real Fruitful treat Raspberry flavoured Candies.',
//         page: "../Raspberry/raspberry.html"
//     },
//     {
//         image: 'https://www.bokksumarket.com/cdn/shop/files/BG11743_CandyKawaguchiMikanCandy_Texture.jpg?v=1689099200&width=1080',
//         title: 'Orange Candies',
//         description: 'Delicious real-fruitful juicy tangful Orange Flavoured Candies.',
//         page: "../Orange/orange.html"
//     },
//     {
//         image: 'https://vegetarianmamma.com/wp-content/uploads/2022/10/Christmas-Chocolate-Covered-Strawberries-4.jpg',
//         title: 'Strawberry Candies',
//         description: 'Strawberry fresh fruitful rich delicious soft creamy flavoured Candies.',
//         page: "../Strawberry/strawberry.html"
//     },
//     {
//         image: 'https://clickcuisineuae.com/cdn/shop/products/Hershey-s-Kisses-Milk-Chocolate-325gm-Kisses-1667800442.jpg?v=1667800444&width=1946',
//         title: 'Chocolate Kisses',
//         description: 'Creamy delicious milk chocolate and is delicately wrapped kisses.',
//         page: "../Chocolates/kisses.html"
//     },
//     {
//         image: 'https://c4.wallpaperflare.com/wallpaper/226/838/327/chocolate-brown-food-sweet-wallpaper-preview.jpg',
//         title: 'Nuts Candies',
//         description: 'Mixed various nutty chocolate candies topped with dryfruits.',
//         page: "../Nuts/nuts.html"
//     },
//     {
//         image: 'https://m.media-amazon.com/images/I/815qJkPc2-L.jpg',
//         title: 'Lollipops',
//         description: 'Yummylicious various flavoured real fruit Lollipops.',
//         page: "../Lollipops/lollipop.html"
//     },
//     {
//         image: 'https://i2-prod.devonlive.com/whats-on/article9747866.ece/ALTERNATES/s615/0_cadbury.jpg',
//         title: 'Cadbury',
//         description: 'Sweet, juicy, and refreshing, with a subtle hint of tanginess',
//         page: "../Cadbury/cadbury.html"
//     },
//     {
//         image: 'https://www.juneflowers.com/wp-content/uploads/2024/02/002.png',
//         title: 'Ferroro rocher',
//         description: 'A fruity flavor that can be sweet, juicy, and floral',
//         page: "../Ferrorocher/ferrorocher.html"
//     }
// ];

// let boxContainer = document.getElementById("boxContainer");
// let cartBtn = document.getElementsByTagName("button")[0];
// for (let i = 0; i < candyCards.length; i++) {
//     let x = candyCards[i];
//     let cards = document.createElement("div");
//     cards.innerHTML = `
// <img src="${x.image}">
// <h3>${x.title}</h3>
// <p>${x.description}</p>
// <button id="seeMore">See More</button>
// <button>Add to Cart</button>
// `
//     cards.style.border = "2px solid black";
//     cards.style.display = "flex";
//     cards.style.width = "30%";
//     cards.style.height = "60vh";
//     cards.style.flexDirection = "column";
//     cards.style.justifyContent = "center";
//     cards.style.alignItems = "center";
//     let a = cards.getElementsByTagName("img")[0];
//     a.style.height = "60%";
//     a.style.width = "100%";
//     boxContainer.style.display = "flex";
//     boxContainer.style.flexWrap = "wrap";
//     boxContainer.style.gap = "20px";
//     boxContainer.style.justifyContent = "space-around";
//     boxContainer.style.alignItems = "center";

//     let btn = cards.getElementsByTagName("button")[0];
//     btn.addEventListener("click", () => {
//         window.location.href = x.page;
//     });

//     let addToCart = cards.getElementsByTagName("button")[1];
//     addToCart.addEventListener("click", () => {
//         forCart(i);
//     });

//     boxContainer.append(cards);
// }

// let input = document.querySelector("input");
// input.addEventListener("keypress", (e) => {
//     if (e.key == "Enter") {
//         let inputValue = input.value;
//         for (let i = 0; i < candyCards.length; i++) {
//             if (candyCards[i].title.toLowerCase() === inputValue.toLowerCase()) {
//                 location.href = candyCards[i].page;
//             }
//         }
//     }
// });

// function forCart(index) {
//     let cartItem = JSON.parse(localStorage.getItem("cartItems")) || [];
//     let found = false;

//     for (let i = 0; i < cartItem.length; i++) {
//         if (cartItem[i].title === candyCards[index].title) {
//             cartItem[i].count += 1;
//             found = true;
//             break;
//         }
//     }

//     if (!found) {
//         cartItem.push({
//             image: candyCards[index].image,
//             title: candyCards[index].title,
//             description: candyCards[index].description,
//             count: 1
//         });
//     }

//     localStorage.setItem("cartItems", JSON.stringify(cartItem));
// }

// cartBtn.addEventListener("click", () => {
//     location.href = "./cart.html";
// });


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
  let raspberry = document.getElementById("cardContainer");
  raspberry.style.display = "flex";
  raspberry.style.flexWrap = "wrap";
  raspberry.style.gap = "20px";
  raspberry.style.justifyContent = "center";
  function addToCart(index) {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    let found = false;
  
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].title === raspberryCards[index].title) {
        cartItems[i].count += 1;
        found = true;
        break;
      }
    }
  
    if (!found) {
      cartItems.push({
        ...raspberryCards[index],
        count: 1,
      });
    }
  
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }
  
  raspberryCards.forEach((item, index) => {
    let candy = document.createElement("div");
    candy.classList.add("candy-card");
  
    candy.innerHTML = `
      <img src="${item.image}" alt="${item.title}" />
      <h4>${item.title}</h4>
      <p>${item.description}</p>
      <span>${item.price}</span>
      <button class="add-to-cart">Add to Cart</button>
      <button class="buy-now">Buy Now</button>
    `;
  
    raspberry.appendChild(candy);
  
    candy.querySelector(".add-to-cart").addEventListener("click", (e) => {
      e.stopImmediatePropagation();
      if (confirm("Do you want to add this item to the cart?")) {
        addToCart(index);
      }
    });
  
    candy.querySelector(".buy-now").addEventListener("click", (e) => {
      e.stopPropagation();
      window.location.href = "./cart.html";
    });
  
    candy.addEventListener("click", () => {
      localStorage.setItem("eachItem", JSON.stringify(item));
      window.location.href = "../Singlecard_page/eachitem.html";
    });
  });
  

  