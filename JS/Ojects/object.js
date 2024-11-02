var person ={
    firstName : "Manideep",
    lastName :"Parlapalli",
    age : 21
}
console.log(person.firstName)
person.city = "New York"
console.log(person)

var product ={
    name : "stock1",
    price :2000,
    inStock:"yes"
}
console.log(product)
product.price = 6000
console.log(product)
delete product.inStock
console.log(product)

var library = {
    Entertainment : ["e1" , "e2" , "e3"],
    fantasy:["f1" , "f2" , "f3"],
    mystery:["m1" , "m2"]
}
library.scienceFiction =["sf1" , "sf2"]
console.log(library)
console.log(library.fantasy[0])
delete library.mystery
console.log(library)

var user = {
    username :"manideep",
    email:"mani@gmail.com",
    address : {city :"skzr" , state :"ts" , zip :504296}
}
Object.freeze(user)
user.email = "man@outlook.com"
console.log(Object.isFrozen(user))
console.log(user)
user.phone = 7894561230
console.log(user)

var car ={
    make :"make1",
    model: 2024,
    price :5000000
}
Object.seal(car)
delete car.make
console.log(Object.isSealed(car))
car.price = 450000
Object.seal(car)
console.log(Object.isExtensible())


const store = {
    name: "SuperMart",
    products: {
    electronics: {
        phones: {
          apple: {
            iPhoneX: { price: 999, stock: 20 },
            iPhone12: { price: 1099, stock: 15 },
          },
          samsung: {
            galaxyS21: { price: 799, stock: 25 },
            galaxyNote20: { price: 999, stock: 10 },
          },
        },
        laptops: {
          dell: {
            XPS13: { price: 1200, stock: 10 },
            Inspiron15: { price: 800, stock: 30 },
          },
          hp: {
            SpectreX360: { price: 1300, stock: 5 },
            Pavilion15: { price: 750, stock: 20 },
          },
        },
      },
      groceries: {
        fruits: {
          apples: { price: 2, stock: 100 },
          bananas: { price: 1, stock: 150 },
        },
        vegetables: {
          carrots: { price: 1.5, stock: 200 },
          spinach: { price: 1, stock: 100 },
        },
      },
    },
  };
  
  console.log(store.products.groceries.vegetables.spinach)
console.log(store.products.electronics.laptops.hp.Pavilion15)

