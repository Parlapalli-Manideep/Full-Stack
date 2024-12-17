// function a(z){
//     console.log(z())
// }
// a(
//     function b(){
//         return "Manideep"
//     }
// )
// console.log(typeof typeof [])

// obj1 = {
//     id : 1, 
//     Name : "manideep",
//     age : 21 ,
//     siblings : true,
//     state : "ts",
//     details : function (){
//         console.log(`id is ${this.id} and name is ${this.Name} he lives in ${this.state}`)
//     }
// }
// obj1.details()
// var det = function (k){
//     console.log(`id is ${this.id} and name is ${this.Name} he lives in ${this.state} ${k}`)
// }
// det.call(obj1 , "-----one bro-----")

// obj2 = {
//     id : 1, 
//     Name : "satheesh",
//     age : 22 ,
//     siblings : true,
//     state : "bihar",
//     details : function (){
//         console.log(`id is ${this.id} and name is ${this.Name} he lives in ${this.state}`)
//     }
// }
// obj2.details()

// det = function (k){
//     console.log(`id is ${this.id} and name is ${this.Name} he lives in ${this.state} ${k}`)
// }
// det.call(obj2, "---two bro----")


// obj3= {
//     id : 1, 
//     Name : "sravan",
//     age : 20 ,
//     siblings : true,
//     state : "odisha",
//     details : function (){
//         console.log(`id is ${this.id} and name is ${this.Name} he lives in ${this.state}`)
//     }
// }
// obj3.details()

obj1 ={
    id : 1 , 
    Name : "Manideep",
    age : 22
}
obj2={
    id : 2, 
    Name : "Anirudh" ,
    age : 18
}
obj3 ={
    id : 3, 
    Name : "Satheesh" ,
    age : 21
}
obj4 ={
    id : 4 , 
    Name : "Sravan" ,
    age : 23
}
obj5 ={
    id : 5, 
    Name : "chini" ,
    age : 20
}
obj6 ={
    id : 6 , 
    Name : "Teju" ,
    age : 20
}
obj7 ={
    id : 7 , 
    Name : "Sai pavan" ,
    age : 22
}
obj8 ={
    id : 8 , 
    Name : "Srivani" ,
    age : 23
}
obj9 ={
    id : 9 , 
    Name : "Sunny" ,
    age : 19
}
obj10 = {
    id : 10,
    Name : "Bittu",
    age : 21
}
details = function(a ,b){
    console.log(`details are person with id${this.id} name is ${this.Name} and their age is ${this.age} , it is invoked by ${a} and it is ${b}`)
}
details.call(obj1 , "call" , "successful")
details.call(obj2 , "call" , "successful")
details.call(obj3 , "call" , "successful")
details.call(obj4 , "call" , "successful")
details.call(obj5 , "call" , "successful")
details.call(obj6 , "call" , "successful")
details.call(obj7 , "call" , "successful")
details.call(obj8 , "call" , "successful")
details.call(obj9 , "call" , "successful")
details.call(obj10 , "call" , "successful")

console.log("-----------------------------")

details.apply(obj1 , ["apply" , "successful"])
details.apply(obj2 , ["apply" , "successful"])
details.apply(obj3 , ["apply" , "successful"])
details.apply(obj4 , ["apply" , "successful"])
details.apply(obj5 , ["apply" , "successful"])
details.apply(obj6 , ["apply" , "successful"])
details.apply(obj7 , ["apply" , "successful"])
details.apply(obj8 , ["apply" , "successful"])
details.apply(obj9 , ["apply" , "successful"])
details.apply(obj10 , ["apply" , "successful"])

console.log("-------------------------------")
forBind =details.bind(obj1 , "bind" , "successful")
forBind()
forBind =details.bind(obj2 , "bind" , "successful")
forBind()
forBind =details.bind(obj3 , "bind" , "successful")
forBind()
forBind =details.bind(obj4 , "bind" , "successful")
forBind()
forBind =details.bind(obj5 , "bind" , "successful")
forBind()
forBind =details.bind(obj6 , "bind" , "successful")
forBind()
forBind =details.bind(obj7 , "bind" , "successful")
forBind()
forBind =details.bind(obj8 , "bind" , "successful")
forBind()
forBind =details.bind(obj9 , "bind" , "successful")
forBind()
forBind =details.bind(obj10 ,"bind" , "successful")
forBind()




