// let n = prompt("Enter a number: ")
// let s = 1 
// a= [];
// while( s < n)
// {
//     // console.log(n--)
//     // console.log(s++)
    
//     a.push(n--)
//     a.push(s++)
// }
// // for(i = 0 ; i < a.length ; i++)
// console.log(a)



// // let n = prompt("Enter a number: ")
// // conosle


// str = 10_1_9_2_8_3_7_4_6_5
// console.log(str.split("_"))
// console.log(str.join(" Manideep "))


// number = prompt("Enter an array: ").split(",")
// unique = [] ,duplicate = []
// for(i = 0 ; i < number.length ; i++){
//     for(j = 0 ; j < number.length ; j++){
// if(number[i] == number[j] && i != j && !(duplicate.includes(number[i])))
//     duplicate.push(number[i])
//     }
//     if(!(duplicate.includes(number[i])))
//     {
//     unique.push(number[i])
//     }
// }
// console.log("duplicates are: "+ duplicate)
// console.log("unique are: "+ unique)

// n =  prompt("Enter a number: ").split(",")
// u = []
// for(i = 0 ; i < n.length ; i++)
// {
//     count = 0
//   for(j = 0 ; j <= u.length ;j++)
//   {
//       if(n[i] == u[j]){
//       count++
//       }
//   }
//   if(count == 0)
//   u.push(n[i])
// }
// console.log(u)

a = [12,24,56,78,00,23,56,30,48,122,456,11]
let odd = [], even = []
for(i = 0 ; i < a.length ;i++)
{
    if(a[i] % 2 == 0)
    even.push(a[i])
    else
    odd.push(a[i])
}
console.log("even array: "+even)
console.log("odd arary: "+odd)
a= Math.min(...odd)
b=Math.max(...odd)
console.log("min odd: "+a)
console.log("max odd: "+b)
c=Math.min(...even)
d=Math.max(...even)
console.log("min even: "+c)
console.log("max even: "+d)

if(b < d)
{
    for(i = 0 ; i < odd.length ;i++)
    odd[i] *= 2
    console.log(odd)
}
else{
    if(odd[i] >= 25)
    odd[i] -= 25
    console.log(odd)
}




