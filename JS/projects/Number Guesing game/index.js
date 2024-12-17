btn = document.getElementsByTagName("button")[0]
attempts = document.getElementsByTagName("span")[0].textContent
p = document.getElementsByTagName("p")[1]
n = Math.ceil(Math.random() * 100)
console.log(n)
btn.addEventListener("click" , ()=>
{
Input = document.getElementsByTagName("input")[0]
i = Input.value
    if(n == i){
        p.innerHTML = `Your Guess is correct , No of attempts are ${attempts}`
        p.style.color = "green"
    }
    else if(i > n){
        p.innerHTML = `Your Guess is High`
        p.style.color = "red"
        Input.value = ""
    }
    else{
        p.innerHTML =`Your Guess is Low`
        p.style.color = "red"
        Input.value=""
    }
    attempts = Number(attempts) + 1
})