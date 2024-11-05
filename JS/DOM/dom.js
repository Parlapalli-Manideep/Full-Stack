var  k = document.getElementById("pp")
k.style.backgroundColor = "red" ;
k.style.fontSize = "60px" ;

var b = document.getElementById("btn")
b.style.width = "300px";
b.style.height= "50px";
b.style.fontSize= "30px";

b.onclick = function a(){
    k.textContent = "text changed by clicking"
    k.style.backgroundColor ="blue"
    k.style.color ="white"

}