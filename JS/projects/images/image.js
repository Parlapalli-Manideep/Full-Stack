let a = document.getElementsByTagName("img")
let b = document.getElementsByTagName("input")

b[0].addEventListener("keyup" , (enter)=>
{
    if(enter.key === "Enter")
    document.body.style.backgroundColor = b[0].value
})
b[1].addEventListener("keyup" , (enter)=>
    {
        if(enter.key === "Enter")
        a[0].style.borderRadius = b[1].value + "px"
    }) 