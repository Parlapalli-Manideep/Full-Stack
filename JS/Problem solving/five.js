
num = +prompt("Enter a number: ")
n = num, nn = num ,  check = 0 , sum = 0 ;
while( n >= 1 )
{
    n/= 10
    check++
}
while(num != 0)
{
    k = 1
    rem = num % 10;
    num = (num/10) - (rem/10)
    for(i = 0 ; i < check ; i++)
    {
       k *= rem
    }
    sum += k
}
if(sum == nn)
console.log("Armstrong number")
else
console.log("Not a armstrong number")                                         