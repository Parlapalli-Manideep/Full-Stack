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


//WAP to print min or max digit in a number and which digit comes first
num = prompt("Enter a number: ")
minNum = maxNum = num[0] , minInd =  maxInd = 0
for(i = 1  ; i < num.length ; i++)
{   
    if(minNum > num[i])
    {
        minNum = num[i]
        minInd = i
    }
        if(maxNum < num[i])
    {
        maxNum = num[i]
        maxInd = i
    }
}
console.log("min number is " +minNum + " at "+minInd)
console.log("max number is " +maxNum + " at "+maxInd)
if(minInd < maxInd)
console.log("min digit comes first")
else
console.log("max digit comes first")