inputs = document.getElementsByTagName("input")
btn = document.getElementsByTagName("button")
para = document.getElementById("wrongPswd")
error = document.getElementsByClassName("error")
const nameError = /^[a-zA-Z]{3,}$/
const pswdError =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,14}$/
const emailError = /^[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,}/
isvalidate = false;

btn[1].addEventListener("click", (event) => {
    sessionStorage.setItem("username","Guest")
    sessionStorage.setItem("islogin" , true)
    window.location.href = "./../mainPage/main.html"
})

function passwordcheck(i, j) {
    check = 0
    if (i == 3) {
        uPswd = inputs[2].value
        if (pswdError.test(uPswd)) {
            error[2].style.display ="none"
            check = 1;
        }
        else{
            error[2].style.display = "block"
            setTimeout(() => {
                error[2].innerHTML = `It should not start with a special <br>
                                        character or number , it must contain 1 <br>
                                        special character, one number and one <br>
                                        uppercase and one lowercase letter.<br> Its length should be in between 8 to 15`
                error[2].style.color = "red"
isvalidate = false;

            }, 2000)
            return ;
        }
    }
    if( i == 3 && check == 1 || i ==2 )
    {
        if (inputs[i].value.trim() === inputs[j].value.trim() || inputs[i].value.trim() =="" || inputs[j].value.trim() =="") {
            para.style.display = "none"
            isvalidate = true
        }
        else {
            isvalidate = false
            para.style.display = "block"
            setTimeout(() => {
                para.textContent = "Check Your password again"
                para.style.color = "red"
            }, 2000)
            return
        }
    }
}
inputs[3].addEventListener("keyup", () => {
    passwordcheck(2, 3)
})
inputs[2].addEventListener("keyup", () => {
    passwordcheck(3, 2)
})

let i = document.getElementsByTagName("i")
i[0].addEventListener("click", () => visible(2, 0))
i[1].addEventListener("click", () => visible(3, 1))
function visible(num, clsNo) {
    if (inputs[num].type === "password") {
        inputs[num].type = "text"
        i[clsNo].className = "fa-solid fa-eye"
    }
    else {
        i[clsNo].className = "fa-solid fa-eye-slash"
        inputs[num].type = "password"
    }
}

inputs[0].addEventListener("keyup",()=>{
    error[0].textContent = ""
})
inputs[1].addEventListener("keyup",()=>{
    error[1].textContent = ""
})

btn[0].addEventListener("click", (event) => {
    event.preventDefault()
    let uName = inputs[0].value.trim()
    let uEmail = inputs[1].value.trim()
    let uPswd = inputs[2].value.trim()
    let uRePswd = inputs[3].value.trim()

    if (uName != "" && uEmail != "" && uPswd != "" && uRePswd != "" ) {

        if (nameError.test(uName)) {
            error[0].innerHTML = ""
        }
        else {
            error[0].innerHTML = `It must contain atleast 3 characters.<br> It should not contain Numbers `
            error[0].style.color = "red"
            return
        }

        if (emailError.test(uEmail)) {
            error[1].textContent = ""
        }
        else {
            error[1].textContent = "Enter valid email"
            error[1].style.color = "red"
            return
        }

        allusers = JSON.parse(localStorage.getItem("user")) || []

        for (i = 0; i < allusers.length; i++)
            if (uEmail === allusers[i].email) {
                error[1].textContent = "User already Exists"
                error[1].style.color = "red"
                return
            }

        if (uPswd === uRePswd && isvalidate == true) {
            allusers.push({ name: uName, email: uEmail, pswd: uPswd })
            localStorage.setItem("user", JSON.stringify(allusers))
            window.location.href = "./../login/login.html"
        }
        else {
            para.style.display = "block"
            para.textContent = "Check Your password again"
        }
    }
    else {
        if (uName == "") {
            error[0].textContent = "please fill this field"
            error[0].style.color = "red"
        }
        if (uEmail == "") {
            error[1].textContent = "please fill this field"
            error[1].style.color = "red"
        }
        if (uPswd == "") {
            error[2].textContent = "please fill this field"
            error[2].style.color = "red"
        }
        if (uRePswd == "") {
            para.textContent = "please fill this field"
            para.style.color = "red"
        }
    }
})