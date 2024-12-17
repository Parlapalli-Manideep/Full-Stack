let text = document.getElementsByTagName("input")[0]
let btn = document.getElementsByTagName("button")[0]
let tasks = document.getElementsByClassName("tasks")[0]

btn.addEventListener("click",addtask)
text.addEventListener("keydown",(e)=>{
    if(e.key =="Enter")
        addtask()
})
function addtask(){
    data = text.value.trim()
    if(data == ""){
        alert("Enter Data")
        return
    }
    var task = document.createElement("li")
    task.innerHTML = `${data}   <button class="edit" style="background-color: orange; color: white; padding: 5px 8px; font-size:15px">Edit</button>   <button class="del"style="background-color: red; color: white;  padding: 5px 8px; font-size:15px">Delete</button>`
    task.style.fontSize = "20px"
    editBtn = task.querySelector(".edit")
    delBtn = task.querySelector(".del")
    tasks.append(task)
    text.value = ""
    editBtn.addEventListener("click", ()=>editData( task))
    delBtn.addEventListener("click", ()=>delData(task))
}

function editData(task){
    n = prompt("Enter data",task.firstChild.textContent.trim())
    if (task.firstChild.textContent==n)
    alert("not changed")
    else{
        if(n =="")
            alert("Enter some  data")
        else
            task.firstChild.textContent = n
    }
}
function delData(task){
    done = confirm("are you sure ?")
    if(done)
        task.remove()

}
