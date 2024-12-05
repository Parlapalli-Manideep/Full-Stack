//To check duplicates and Unique Numbers.
number = prompt("Enter an array: ").split(",")
unique = [] ,duplicate = []
for(i = 0 ; i < number.length ; i++){
    for(j = 0 ; j < number.length ; j++){
if(number[i] == number[j] && i != j && !(duplicate.includes(number[i])))
    duplicate.push(number[i])
    }
    if(!(duplicate.includes(number[i])))
    {
    unique.push(number[i])
    }
}
console.log(duplicate)
console.log(unique)


//Sum of digits fo a Number in an array
n = prompt("Enter a number: ").split(",")
for(let i of n){
s = sum(i)
console.log("sum of digits in "+ i + " is " +s )
}
function sum(a)
{
    add = 0
    for(i of a)
    add += Number(i)
    return add
}
