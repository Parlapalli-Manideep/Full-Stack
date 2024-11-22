console.log("To check the digits in a number whether they are prime or not")
var num = prompt("Enter a number to check its digits are prime or not: ")
for (i of num)
    if (i < 0)
        console.log("Enter a valid number")
    else if (i == 1 || i == 0)
        console.log(`${i} is not a prime number`)
    else
        prime(i)
function prime(n) {
    let check = 0
    for (j = 2; j < n; j++) {
        if (n % j == 0) {
            check++
            console.log(`${n} is not a prime number`)
            break;
        }
    }
    if (check == 0)
        console.log(`${n} is a prime number`)
}

console.log("to add the sum of prime digits and non prime digits")
console.log("to check the max , min of prime and  non prime number")

var num = prompt("Enter a number: ")
var primeSum = 0, nprimeSum = 0;
var minPrime = 10, maxPrime = -1;
var minnPrime = 10, maxnPrime = -1;
for (i of num)
    if (i == 0 || i == 1) {
        nprimeSum += +(i)

        if (minnPrime > i)
            minnPrime = i
        if (maxnPrime < i)
            maxnPrime = i
    }
    else
        prime(i)
console.log("prime number sum is " + primeSum)
console.log("Non prime number sum is " + nprimeSum)
console.log("min prime number is :" + minPrime)
console.log("max prime number is :" + maxPrime)
console.log("min non prime number is :" + minnPrime)
console.log("max non prime number is :" + maxnPrime)

function prime(n) {
    check = 0
    for (j = 2; j < n; j++)
        if (n % j == 0) {
            nprimeSum += +(n);

            check++
            if (minnPrime > n)
                minnPrime = n
            if (maxnPrime < n)
                maxnPrime = n
            break;
        }
    if (check == 0) {
        primeSum += +(n)
        if (minPrime > n)
            minPrime = n
        if (maxPrime < n)
            maxPrime = n
    }
}

 console.log("to check whether the number is strong number or not")

num = prompt("Enter a number: ")
var sum = 0 ;
for(n of num)
{
    fact = 1
while(n >= 1)
{
    fact *= +(n)
    n--
}
sum += +(fact);
}
if(sum == num)
console.log("strong number")
else
console.log("not a strong number")


console.log("to check whether the number is harshad number or not")


var num = prompt("Enter a number: ")
var sum = 0
for(i of num)
sum += Number(i)
if(num % sum == 0)
console.log("It's is a Harshad number")
else
console.log("It's is a not a Harshad number")



