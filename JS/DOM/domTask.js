// 1. click a button and show the content with 60px fontSize and bgColor red and bordeRadius 50% 

let a = document.getElementsByTagName("button")
let b = document.getElementsByTagName("div")
a[0].onclick = function(){
    b[0].innerHTML=`
    <p>content with 60px fontSize and bgColor red and border Radius 50%</p> 
    `
    b[0].style.fontSize="60px"
    b[0].style.backgroundColor ="red"
    b[0].style.borderRadius = "50%"
    b[0].style.padding ="40px"
}

//  2. click the button and display three images on clicking the button ft img should be of border radius 30px , second img should be border radius 100px , third img should be of borderradius 50%

a[1].onclick=function(){
    b[1].innerHTML = `
<img src = "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/09/naruto-s-akatsuki-villains.jpg" width = "300" height = "300">
<img src = "https://staticg.sportskeeda.com/editor/2022/03/e33a7-16463133883720-1920.jpg" width = "300" height = "300">
<img src = "https://qph.cf2.quoracdn.net/main-qimg-d020c411395f0b2f0067153613f7a6b9-lq" width = "300" height = "300">
`
let x = b[1].getElementsByTagName("img")
x[0].style.borderRadius="30px"
x[1].style.borderRadius="100px"
x[2].style.borderRadius="50%"


}