const GParent=document.getElementsByClassName("grandparent")[0]
const P=document.getElementsByClassName("parent")[0]
const C=document.getElementsByClassName("child")[0]

// GParent.addEventListener("click",(e)=>{
//     // e.stopPropagation()
//     setTimeout(()=>{
//         GParent.style.backgroundColor = "pink"
//     },6000)
//     console.log("grand parent clicked");
// })

// P.addEventListener("click",(e)=>{
//     // e.stopPropagation()
//     setTimeout(()=>{
//         P.style.backgroundColor = "blue"
//     },4000)
//     console.log(" parent clicked");
// })


// C.addEventListener("click",(e)=>{
//     // e.stopPropagation()
//     setTimeout(()=>{
//         C.style.backgroundColor = "red"
//     },2000)
//     console.log("child clicked");
// })




GParent.addEventListener("click",(e)=>{
    // e.stopPropagation()
    // setTimeout(()=>{
    //     GParent.style.backgroundColor = "pink"
    // },2000)
    console.log("grand parent clicked");
},false)

P.addEventListener("click",(e)=>{
        // e.stopPropagation()
    // setTimeout(()=>{
    //     P.style.backgroundColor = "blue"
    // },4000)
    console.log(" parent clicked");
},true)


C.addEventListener("click",(e)=>{
    // e.stopPropagation()
    // setTimeout(()=>{
    //     C.style.backgroundColor = "red"
    // },6000)
    console.log("child clicked");
},false)