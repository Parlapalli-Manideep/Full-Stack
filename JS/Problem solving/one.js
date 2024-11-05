var num = +prompt("Enter a number:")
console.log("printing numbers from -1 to " +num)
for(i = -1 ; !(i < num ) ; i--)
    console.log(i)

n =  +prompt("Enter a number")
console.log("printing numbers from " +n + " to -1")
for(i = n ; !(i >= 0) ; i++)
    console.log(i)

var nn = prompt("Enter a number:")
console.log("printing sum of even digits in a " +nn)
 sum = 0
for( i = 0 ; i < nn.length ; i++){
    if(nn[i] % 2 == 0){
        sum +=+( nn[i])
    }}
console.log(sum)
    
var nn = prompt("Enter a number:")
console.log("printing sum of odd digits in a " +nn)
 sum = 0
for( i = 0 ; i < nn.length ; i++){
    if(nn[i] % 2 != 0){
        sum +=+( nn[i])
    }}
console.log(sum)