// let k = document.getElementsByClassName("para")[1]
// console.log(k)
// k.style.backgroundColor ="red"
// let kk =document.querySelector("p")
// kk .style.backgroundColor = "black"
// kk.style.color = "white"
// kk.style.display="inline"
// console.log(kk.textContent)
// kk.innerHTML = "I am <span style = 'background-color : red; font-size: 25px ; color :black '>Itachi Uchiha </span> of the leaf"
// kk.textContent += " added ra "

// console.log(k.innerText)
// k.innerText = "changed  mama"
// console.log(k.innerText)
// console.log(k)

// let k = document.getElementsByClassName("para")[0]
// let c = document.getElementsByTagName("button")[0]
// function cheyi(){

//     k.textContent = "button is clicked"
//     k.style.backgroundColor = "red"
//     k.style.color = "white"
//     k.innerHTML += `<img src = "https://d2jdgazzki9vjm.cloudfront.net/images/javascript/dom.jpg"/>`
// }

let image = document.getElementsByTagName("p")[0]
image.addEventListener("click", ()=>
{
    image.innerHTML=`<img src = "https://i.redd.it/x35xmb9jxv3b1.jpg" width= "400" height = "500"/>`
})
