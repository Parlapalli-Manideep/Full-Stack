// create 4 cards, 2 crads using innerHtmk and 2 cards using createElement()

let a = document.getElementsByTagName("div")
a[0].innerHTML =
    `
    <div style = "border:2px solid blue;padding :20px">
    <img src = "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/09/naruto-s-akatsuki-villains.jpg" width = "300" height = "300">
    <h3>Akatsuki Member 1 </h3>
    </div>
    <div style = "border:2px solid blue;padding :20px">
    <img src = "https://staticg.sportskeeda.com/editor/2022/03/e33a7-16463133883720-1920.jpg" width = "300" height = "300">
    <h3>Akatsuki Member 2 </h3>
    </div>
`
a[0].style.display = "flex"
a[0].style.alignContent = "center"
a[0].style.gap = "30px"

let one = document.createElement("div")
let two = document.createElement("div")
one.innerHTML=`
    <img src = "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/09/naruto-s-akatsuki-villains.jpg" width = "300" height = "300">
    <h3>Akatsuki Member 1 </h3>
`
two.innerHTML=`
    <img src = "https://staticg.sportskeeda.com/editor/2022/03/e33a7-16463133883720-1920.jpg" width = "300" height = "300">
    <h3>Akatsuki Member 2 </h3>
`
one.style.display="flex";
one.style.flexDirection = "column"

two.style.display="flex";
two.style.flexDirection = "column"
one.style.border = "2px solid black"
two.style.border = "2px solid black"
one.style.padding ="20px"
two.style.padding ="20px"
document.body.append(one , two)