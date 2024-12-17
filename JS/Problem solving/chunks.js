n = [2,5,8,11]
output = []
for(i = 0 ; i < n.length ;i++){
res= []
// res.push(n[i])
output.push([n[i]])
}

output = n.map(element=>[element])
console.log(output)

n = [1,2,3,4,5,6,7,8,9,10,11]
size = prompt("Enter size to make chuncks: ")
output= [] ,res = []
for(i = 0 ; i < n.length ; i++)
{
    if(res.length < size ){
    res.push(n[i])
    if(res.length == size){
    output.push(res)
    res =[]
    }}}
if(res.length != 0)
output.push(res)
console.log(output)


n =[1,2,3,4,5,6,7,8,9,10,11]
size = prompt("Enter size to make chuncks: ")
output= [],res = []
for(i = 0 ; i < n.length ; i++)
{
    if(n[i]%2==0 ){
    res.push(n[i])
    if(res.length == size){
    output.push(res)
    res = []
    }}}
if(res.length != 0)
output.push(res)
console.log(output)

n = [1,2,3,4,5,6,7,8,9,10,11]
size = prompt("Enter size to make chuncks: ")
output= [] ,res = []
for(i = 0 ; i < n.length ; i++)
{
    if(res.length < size ){
    res.push(n[i])
    if(res.length == size){
    output.push(res)
    res =[]
    i -= 2
    }}}
console.log(output)


