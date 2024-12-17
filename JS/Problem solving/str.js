// to check the prefix
n = prompt("Enter no of strings: ")
a = []
for(i = 0 ; i < n ; i++){
s = prompt("Enter string: ")
a.push(s)
}
str = ""


for(i = 0 ; i < s.length; i++){
    for(j = 1 ; j < n ; j++)
    {
         k = check(a[j][i] , i)
        if(!k)
        break
    }
    if(!k)
    break
    str += a[i][i]
}
if(str =="")
console.log("Manideep")
else
console.log("common string : " + str)


function check(s,i){
    if (a[0][i] == s)
    return 1
}


// clock wise and anti clock wise
str = "321"
s1 = str.slice(2)
s1 += str.slice(0,2)
console.log(s1)
s2 = str.slice(-2)
s2 += str.slice(0,-2)
console.log(s2)
console.log("Difference: "+ Math.abs(s1-s2))

// for(i = 1 ; i <= 10 ; i++)
// console.log(i)


// arr = [5,10,15,20]
// console.log(arr[0])
// console.log(arr[arr.length-1])


// arr = [5,10,15,20]
// arr[arr.length] = 25
// console.log(arr)

// arr = [1,2,3,4,5]
// arr.pop()
// console.log(arr)
// arr.shift()
// console.log(arr)

// arr = [1,2,4,5]
// for(i = 1 ; i <= 5; i++){
// if(!arr.includes(i)){
// console.log("MIssing No. is: " + i)
// break
// }}

// arr = [9,88,78,65,32,45,87]
// l1 = arr[0] ,l2 = arr[0]
// for(i = 1 ; i < arr.length ; i++)
// {
//     if(l1 < arr[i])
//     {
//         l1 = arr[i]
//         index= i
//     }
// }
// arr[index] = -1
//     console.log(l1)
// for(i = 1 ; i < arr.length ; i++)
// {
//     if(l2 < arr[i])
//     {
//         l2 = arr[i]
//     }
// } 
//     console.log(l2)

n = prompt("Enter number of elements: ")
a = []
for(i = 0 ; i < n ; i++){
    k = +prompt("Enter element: ")
    a.push(k)
}
for(i = 0 ; i < a.length -1 ; i++)
for(j = i+1 ; j < a.length ;j++)
{
    if(a[i] > a[j])
    {
    temp = a[i]
    a[i] = a[j]
    a[j] = temp
    }
}
console.log(a)



