// let image = document.getElementsByTagName("p")[0]
// image.addEventListener("click", ()=>
// {
//     image.innerHTML=`<img src = "https://i.redd.it/x35xmb9jxv3b1.jpg" width= "400" height = "500"/>`
// })
// let element  = document.getElementsByClassName("btn")[0]
// element.addEventListener("mouseenter", () => {
//     alert("Mouse entered the element!");
// });

// let b = document.getElementById("bn")
// b.addEventListener("click" , ()=>{
//     alert('this button is gives alert by external js')
// })



// cards
let d = document.createElement("div")
document.body.style.display = 'flex'
document.body.style.gap = '20px'

// let d = document.getElementsByTagName("div")[0]
d.innerHTML=`
<img src ="https://d2jdgazzki9vjm.cloudfront.net/images/javascript/dom.jpg " width ="400" height = "400">
<p>card title</p>
 <button width = "fit-content">explore more</button>
` 
d.style.display= "flex"
d.style.flexDirection= "column"
d.style.alignItems="center"
d.style.padding ="10px"
d.style.border ="2px solid black"

let dd = document.createElement("div")
dd.innerHTML=`
<img src ="https://d2jdgazzki9vjm.cloudfront.net/images/javascript/dom.jpg " width ="400" height = "400">
<p>card title</p>
 <button width = "fit-content">explore more</button>
` 
dd.style.display= "flex"
dd.style.flexDirection= "column"
dd.style.alignItems="center"
dd.style.padding ="10px"
dd.style.border ="2px solid blue"
document.body.append(d, dd)
// document.body.appendChild(dd)