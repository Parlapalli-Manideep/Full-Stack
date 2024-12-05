let a = document.getElementsByTagName("i")[0]
a.addEventListener("click", () => {
    if (document.body.style.backgroundColor === "white") {
        console.log("manideep")
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
        a.className = "fa-solid fa-toggle-off"
    }
    else {
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
        a.className = "fa-solid fa-toggle-on"
    }
})
