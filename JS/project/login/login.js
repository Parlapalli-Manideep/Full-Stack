i = document.getElementsByTagName("i")[0]
inputs = document.getElementsByTagName("input")
btn = document.getElementsByTagName("button")
error = document.getElementsByClassName("error")[0]
emailError = /^[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,}/

btn[1].addEventListener("click", (event) => {
    sessionStorage.setItem("username","Guest")
    sessionStorage.setItem("islogin" , true)
    window.location.href = "./../mainPage/main.html"
})

i.addEventListener("click", () => {
    if (inputs[1].type === "password") {
        inputs[1].type = "text"
        i.className = "fa-solid fa-eye"
    }
    else {
        i.className = "fa-solid fa-eye-slash"
        inputs[1].type = "password"
    }
})
isValidate = true

btn[0].addEventListener("click", (event) => {
    event.preventDefault()
    let uEmail = inputs[0].value.trim()
    let uPswd = inputs[1].value.trim()

    if (!emailError.test(uEmail)) {
        error.textContent = "Enter valid Email"
        error.style.color = "red"
        isValidate = false
        return
    }
    else {
        error.textContent = ""
        isValidate = true
    }
    allusers = JSON.parse(localStorage.getItem("user"))
    for(i = 0; i < allusers.length; i++) {
       if( uPswd === allusers[i].pswd && uEmail === allusers[i].email){
        sessionStorage.setItem("username",allusers[i].name)
        sessionStorage.setItem("islogin" , true)
        isValidate = true
        break
       }
       else
       isValidate = false
    }
        if (isValidate) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Login Successful",
                showConfirmButton: false,
                timer: 800
            });
            setTimeout(()=>{ 
                window.location.href = "./../mainPage/main.html"
            },800)
        }
        else{
            inputs[1].value = ""
            inputs[0].value = ""
            Swal.fire("Invalid Credentials");
        }
        
    
})