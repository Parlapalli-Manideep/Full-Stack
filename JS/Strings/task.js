var a = "    mani"
var b = "deep    "
a = a.trimStart()
b= b.trimEnd()
var c = a.concat(b)
c = c.toUpperCase()
console.log(c)

var a2 =  "MANIDEEP"
var b2 = a2.slice(3,5)
console.log(b2.indexOf("D"))
b2 = b2.toLowerCase()
console.log(b2)

var a3 = "a";
var b3 = "kash"
c3 = a3.concat(b3)
c3 = c3.toUpperCase()
console.log(c3.at(-2))

var a4 = "manideep"
var b4 = "anirudh"
a4 = a4.slice(0,3)
b4 = b4.slice(0,3)
c4 = a4.concat(b4)
c4 = c4.split("")
c4[0] = c4[0].toUpperCase()
c4[c4.length -1] = c4[c4.length -1].toUpperCase()
c4 = c4.join("")
console.log(c4)

var a5 = "    manideep    "
a5 = a5.trim()
a5 = a5.split("")
a5[0] = a5[0].toUpperCase()
a5[a5.length -1] = a5[a5.length -1].toUpperCase()
a5 = a5.join("")
console.log(a5)
b5 = " is a goooooddd boy"
a5 =  a5.slice(0,4)
c5 = a5 = a5.concat(b5)
console.log(c5)

var a6 = "hello there , how are you"
console.log(a6.slice(18,21))

