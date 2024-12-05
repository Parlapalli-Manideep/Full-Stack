let paragraph = document.querySelector("p")
console.log(paragraph.innerText)
console.log(paragraph.innerHTML)
console.log(paragraph.textContent)

let d = document.createElement("div")
d.style.display= "flex"
d.style.backgroundColor="black"
d.style.padding = "20px"
d.style.gap = "20px"
d.style.marginTop="50px"
document.body.append(d)
d1 = document.createElement("div")
d2 = document.createElement("div")
d.append(d1, d2)
d1.style.backgroundColor= "white"
d2.style.backgroundColor= "red"
d1.innerHTML = `<img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLVIUKAE4HoXy2SiD5g_fRiFQJuJ3IvrhZLw&s"</img>`
d2.textContent = "ajskdf;"
d1.style.height = "250px"
d1.style.padding = "20px"
d2.style.height = "250px"

clone = d.cloneNode(true)
document.body.append(clone)
paraclone = paragraph.cloneNode(true)
document.body.append(paraclone)


let Adiv = document.createElement("div")
Adiv.setAttribute("height" , "100px")
Adiv.style.backgroundColor = "pink"
Adiv.textContent = "for modifing through attributes example"
let divHeight = Adiv.getAttribute("height")
console.log(divHeight)
document.body.append(Adiv)
let hasHeight = Adiv.hasAttribute("width")
console.log(hasHeight)
Adiv.removeAttribute("height")


Bdiv = document.createElement("div")
Bdiv.className = "div1"
Bdiv.textContent = "working with classes"
// console.log(Bdiv)
// Bdiv.classList.add("div2")
// console.log(Bdiv)
// Bdiv.classList.remove("div2")
// console.log(Bdiv)
// Bdiv.classList.replace("div1" , "newDiv")
// console.log(Bdiv)
// Bdiv.classList.toggle("div1")
// console.log(Bdiv)
document.body.append(Bdiv)
let hasClass = Bdiv.classList.contains("div1")
console.log(hasClass)

d1.addEventListener("click" , one)
d1.removeEventListener("click", one )
function one(){
    d1.style.border = "10px solid yellow"
    alert("clicked on div1")
}


main = document.getElementById("main")
para = document.getElementsByClassName("paras")[0]
oh = document.getElementsByClassName("ooo")[0]
console.log(para.parentNode)
console.log(main.childNodes)
console.log(main.children)
console.log(main.firstChild)
console.log(main.firstElementChild)
console.log(main.lastChild)
console.log(main.lastElementChild)
console.log(oh)
console.log(oh.nextSibling)
console.log(oh.nextElementSibling)
console.log(oh.previousSibling)
console.log(oh.previousElementSibling)


oh = document.getElementsByClassName("ooo")[0]

let image = document.createElement("img")
image.setAttribute("src" , "https://ewzduhvhjkj.exactdn.com/wp-content/uploads/2022/03/29171456/React-3.png?strip=all&lossy=1&ssl=1")

oh.insertAdjacentElement("afterend" , image)
console.log(oh.previousElementSibling)
