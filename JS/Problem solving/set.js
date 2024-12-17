// let a = new Set([1,2,3,4,4,4,5,6])
// console.log(a)
// a.add(10)
// console.log(a)
// a.delete(10)
// console.log(a)
// check=a.has(2)
// console.log(check)
// console.log(a.size)

// res = []
// res.push(...a)
// console.log(res)

// result = [...a]
// console.log(result)

// a.clear()
// console.log(a)


// arr = [1,2,12,1,5,47,89,6,2,1]
// a = arr.sort((a,b) =>a-b)
// b = new Set()
// forEach((x)=>b.add(x))
// console.log(b)

a = [1,2,3,4] , b = []
for(i = 0 ; i < a.length ;i++)
{
     product = 1;
    for(j = 0 ; j < a.length ;j++)
    {
        if(i != j)
        product *= a[j] 
    }
    b.push(product)
}
console.log(b)

