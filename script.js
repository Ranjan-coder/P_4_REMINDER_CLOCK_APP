let assignTime = document.getElementsByTagName("h1")
function clockstart(){
    let AMPM = "";
    let time = new Date();
    let hrs = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();
    if(hrs > 12){
        hrs -= 12
        AMPM = "PM"
    }
    else{
        AMPM = "AM"
    }
    // assignTime[0].innerHTML = `${hrs} : ${mins} : ${secs} : ${AMPM}`;
    assignTime[0].innerHTML = `${hrs} hour `
    assignTime[2].innerHTML = `${mins} mins`
    assignTime[4].innerHTML = `${secs} secs`
    assignTime[5].innerHTML = `${AMPM}`
}
setInterval(()=>{
    clockstart();
},1000);