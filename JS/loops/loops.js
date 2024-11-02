var i ;
for(i = 1; i <= 10 ; i++)
    console.log(i) 

for(i = 10 ; i > 0 ; i--)
    console.log(i) 

console.log("Even numbers")
for(i = 1 ; i <= 10; i++)
    if(i % 2 == 0)
        console.log(i)

console.log("Odd Numbers")
for(i = 1 ; i <= 10; i++)
    if(i % 2 != 0)
        console.log(i)

console.log("Using While")
i = 1 ;
while(i <=10)
{
   console.log(i)
   i++;
}

i = 10
while(i >0)
{
   console.log(i)
    i--;
}
console.log("even using while")
i = 1 ;
while(i <=10)
{
    if(i % 2 == 0)
   console.log(i)
   i++;
}

console.log("odd using while")
i = 1 ;
while(i <=10)
{
    if(i % 2 != 0)
   console.log(i)
   i++;
}

console.log("using do while")
i = 1
do{
    console.log(i)
    i++
}
while(i <=10)

i = 10;
do{
    console.log(i)
    i--
}
while(i > 0)

console.log("even using do while")
i = 1 
do{
    if(i % 2 == 0)
        console.log(i)
    i++
}while(i <=10)


console.log("odd using do while")
i = 1 
do{
    if(i % 2 != 0)
        console.log(i)
    i++
}while(i <=10)
