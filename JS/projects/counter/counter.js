i = document.getElementById("inc")
d = document.getElementById("dec")
r = document.getElementById("reset")
p = document.getElementsByTagName("p")[0]
i.addEventListener("click",()=>{
    p.textContent = Number(p.textContent)  + 1
})
d.addEventListener("click",()=>{
    p.textContent -= 1
})
r.addEventListener("click",()=>{
    p.textContent = 0
})