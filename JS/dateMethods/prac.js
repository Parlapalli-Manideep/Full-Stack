para = document.getElementsByTagName("p")[0]
para1 = document.getElementsByTagName("p")[1]
month = {
    1 : "January",
    2 : "February",
    3 :"March",
    4 :"April",
    5 :"May",
    6 :"June",
    7 :"July",
    8 :"August",
    9 :"September",
    10:"October",
    11:"November",
    12:"December",

}
bHour = 0
bMin = 0
bSec = 0
let a = new Date()
function entered(){
    bDate = document.getElementsByTagName("input")[0].value
    bMonth = document.getElementsByTagName("input")[1].value
    if(bDate > 0 && bDate < 32 && bMonth > 0 && bMonth <13) 
    {
    MonthName = month[bMonth]
    para.innerHTML = `Birthday on ${bDate}th ${MonthName}`
    para.style.fontSize = "25px"
    let Birthday = new Date()
    Birthday.setMonth(bMonth -1)
    Birthday.setDate(bDate)
    Birthday.setHours(bHour)
    Birthday.setMinutes(bMin)
    Birthday.setSeconds(bSec)
    if((bDate < a.getDate() || bDate >a.getDate()) && bMonth >= a.getMonth()+1)
        {
            setInterval(()=>{
            let a = new Date()
           let d = (bDate => a.getDate()) ? bDate - a.getDate() : bDate -a.getDate() -31 
            para1.innerHTML = `Birthday is in ${Number(a.getMonth()) + 1 - Number(bMonth)} Months ${d} Days ${23 - a.getHours()} hours ${59 -a.getMinutes()}
            Minutes ${59 - a.getSeconds() } Seconds`
        },1000)
    }
    else if(bDate == a.getDate() && bMonth == a.getMonth() +1)
    {
        para1.innerHTML = `Yohoo!!!! Today is your Birthday`
        para1.style.fontSize = "30px"
        para1.style.color = "green"
    }
    else{
        para.innerHTML = `Your Birthday is completed in this year`
        para.style.color ="red"
        para.style.fontSize = "30px"
        setInterval(()=>{
            let a = new Date()
            let  m = 11 - parseInt(a.getMonth()) + parseInt(bMonth)
            let d = bDate => a.getDate() ? bDate - a.getDate() : bDate -a.getDate() -31 
            console.log(m)
            para1.innerHTML = `Birthday is in ${m} Months ${bDate - a.getDate()} Days ${23 - a.getHours()} hours ${59 -a.getMinutes()} Minutes ${59 - a.getSeconds()} Seconds`
        },1000)
    }
    }


    else{
        para.innerHTML = `Enter Correct Date`
        para.style.color ="red"
        para.style.fontSize = "30px"
    }

}




