i = document.getElementsByTagName("i")[0]
inputs = document.getElementsByTagName("input")
btn = document.getElementsByTagName("button")[0]
error = document.getElementsByClassName("error")[0]
emailError = /^[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,}/

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

btn.addEventListener("click", (event) => {
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
    for (i = 0; i < allusers.length; i++) {
       if( uPswd === allusers[i].pswd && uEmail === allusers[i].email){
        sessionStorage.setItem("username",allusers[i].name)
        // alert(sessionStorage.getItem("username"))
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
                timer: 2000
            });
            setTimeout(()=>{
                window.location.href = "index.html"
            },2000)
        }
        else
        Swal.fire("Invalid Credentials");
    
})