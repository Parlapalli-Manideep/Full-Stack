console.log("printing sum of fibonacci series")
var num = prompt("Enter a number: ")
let check = sum = 0 ; 
let a = 0 , b = 1 , c , res=""
while(check != num)
{
    res += a;
    sum += a;
    c =  a + b
    a = b 
    b = c
    check++
    if(check != num)
    res += "+"
    else
    res += "="
    
}
console.log(res ,sum)



console.log("Wap to print the sum of  fibonacci in the given number: ")
var num =prompt("Enter a number: ")
sum = 0
for(i of num)
{
 let    a = 0 , b = 1 , c 
    while(a <=i)
    {
        if(a == i){
        sum += a
        break;
        }
        c =a + b
        a= b
        b = c
    }
   }
console.log(sum)


console.log("Converting Roman to Number")
var str = prompt("Enter a roman number: ")
romanToInt(str)
function romanToInt(s) {
    roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let sum = 0
    for (let i = 0; i <s.length; i++) {
        if (roman[s[i]] < roman[s[i + 1]])
            sum -= roman[s[i]]
        else
            sum += roman[s[i]]
    }
    console.log(sum)
};

