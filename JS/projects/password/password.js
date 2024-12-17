let a =  document.getElementsByTagName("input")[0]
let i =  document.getElementsByTagName("i")[0]

    i.onclick = function()
    {
        if(a.type === "password")
        {
            a.type = "text"
            i.className="fa-solid fa-eye"
        }
        else
        {
            i.className ="fa-solid fa-eye-slash"
            a.type = "password"
        }
    }