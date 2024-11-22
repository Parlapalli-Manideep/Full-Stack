var space = " "
var str = "*"
var num1 = prompt("Enter no. of lines: ")
for(let i = 1 ; i <= num1 ; i++)
console.log(str.repeat(i))
console.log("-----------------------------------------------")
var num2 = prompt("Enter no of lines : ")
for(let i = num2 ; i >= 1 ; i--)
console.log(str.repeat(i))
console.log("-----------------------------------------------")
var num3 = prompt("Enter no of lines : ")
for(let i = 1 ; i <= num3  ;i++)
console.log(space.repeat(num3-i), str.repeat(i))
console.log("-----------------------------------------------")
var num4 = prompt("Enter no of lines : ")
for(let i = num4 ; i >= 1 ; i--)
console.log( space.repeat(num4-i) , str.repeat(i))
console.log("-----------------------------------------------")
 var num5 = prompt("Enter no of lines : ")
 for(let i = 1 ; i <= num5 ;i++){
 console.log(space.repeat(num5-i) , str.repeat(i * 2 - 1))
}
console.log("-----------------------------------------------")
 var num6 = prompt("Enter no of lines : ")
 for(let i = 1 ; i <= num6; i++)
 console.log(space.repeat(num6-i) ,str.repeat(i * 2 - 1) )
 for(let i = num6-1 ; i >= 1 ;i--)
 console.log(space.repeat(num6-i) , str.repeat(i * 2 -1) )
 
 
 