a = +prompt("Enter first number: ")
b = +prompt("Enter second number: ")
LCM = 0
max = a > b ? a:b
min = a < b ? a:b
for(i = 1 ; i <= min ; i++)
{
    LCM +=max
    if( LCM % min == 0 )
    {
        console.log("LCM  is " +LCM)
        break
    }
}
console.log("GCD is "+ (a * b)/LCM)
