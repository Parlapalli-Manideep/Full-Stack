let r  = document.getElementsByClassName("result")[0]
function calculate(num){
   r.textContent == 0 && num == 0 ?  r.textContent = num:  r.textContent += num  
}
function vanish(){
    r.textContent = 0;
}
function operation(op)
{
    r.textContent += op
}
function result(){
    r.textContent = eval(r.textContent)
}
