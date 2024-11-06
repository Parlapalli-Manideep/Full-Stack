var num = prompt("enter a number: ")
console.log("WAP to print even digits are or odd digits are more in "+ num +" :")
let oddCount = evenCount = 0;
for( let i = 0 ; i < num.length ; i++){
    if(num[i] % 2 == 0){
        evenCount++;
    }
    else
    oddCount++;
}
if(evenCount > oddCount)
    console.log("Even digits are more")
else if (evenCount == oddCount)
    console.log("Even digits and odd digits are equal")
else 
console.log("Odd digits are more")

num = prompt("enter a number: ")
console.log("WAP to print even sum are or odd sum is more in "+ num +" :")
let oddsum = evensum = 0;
for( let i = 0 ; i < num.length ; i++){
    if(num[i] % 2 == 0){
        evensum += +num[i]
    }
    else
    oddsum += +num[i]
}
if(evensum > oddsum)
    console.log("Even sum is more")
else if (evensum == oddsum)
    console.log("Even sum and odd sum are equal")
else 
console.log("Odd sum is more")


var checkPrime = +(prompt("Enter a number to check whether it is a prime or not: "))
console.log("Checking whether the number is prime or not" + checkPrime + " :")
var k = 0
if(checkPrime == 0 || checkPrime == 1)
    console.log("Not a prime number");
else if(checkPrime < 0)
    console.log("Enter a valid number")
else{
for(i = 2 ; i < checkPrime ;i++)
{
    if( checkPrime % i == 0){
        console.log("Not a prime number")
        k++
        break;
}
}
if (k == 0)
console.log( checkPrime +" is a Prime Number")
}

