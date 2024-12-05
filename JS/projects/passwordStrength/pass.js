let a  = document.getElementsByTagName("input")[0]
let para = document.getElementsByTagName("p")[0]
a.addEventListener("keyup" , (e)=>{
    console.log("ayyo")
    if(e.key ==="Enter"){
        if(a.value.length < 8)
            {
                para.style.color ="red"
                para.textContent = "Set New Password , Your password is not Strong enough"
                a.value =""
            }
            else if(a.value.length >= 8 && a.value.length < 16 ){
                para.style.color ="green"
                para.textContent = "Strong Password"
            }
            else{
                para.textContent = "Set New Password , Your password is too long"
                para.style.color ="red"
                a.value =""
            }
    }
})



