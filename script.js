let Msg=document.getElementById("child_container_3");
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
    else if(hrs==12){
        AMPM="PM"
    }
    else{
        AMPM = "AM"
    }
    // assignTime[0].innerHTML = `${hrs} : ${mins} : ${secs} : ${AMPM}`;
    assignTime[0].innerHTML = `${hrs} hour `
    assignTime[2].innerHTML = `${mins} mins`
    assignTime[4].innerHTML = `${secs} secs`
    assignTime[5].innerHTML = `${AMPM}`

    if(hrs>=4 && hrs<=11 && AMPM=='AM'){
        Msg.innerHTML="GRAB SOME HEALTHY BREAKFAST!!!"
    } 
    else if(hrs<=4 && hrs<=12 && AMPM=='PM')
    {
        Msg.innerHTML="LET'S TAKE SOME HEALTHY LUNCH";
    }
    else if(hrs>4 && hrs<=8 && AMPM=='PM')
    {
        Msg.innerHTML = "STOP YAWNING ,GET SOME TEA..ITS JUST EVENING !!!";
    }
    else if(hrs>8 &&  AMPM=="PM" || hrs>=12 && AMPM=="AM" || hrs >=1 && hrs <4 && AMPM=="AM")
    {
        Msg.innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP"
    }
}
setInterval(()=>{
    clockstart();
},1000);

let inputValue = document.querySelectorAll('select');
let text = document.getElementById('child_container_6');
let imgShow = document.getElementById('child_container_5_1');

function callFunction() {

    let time = new Date();
    let hrs = time.getHours();

   let wakeup = inputValue[0].selectedIndex;
   let lunch = inputValue[1].selectedIndex;
    let nap = inputValue[2].selectedIndex;
    let night =inputValue[3].selectedIndex;
   
    // IT WILL RETURN THE VALUE OF LINE NO LINE NUMBER 54 TO 57
    
   let morning=inputValue[0].options[wakeup];
   let noon=inputValue[1].options[lunch];
   let evening= inputValue[2].options[nap];
   let sleep=inputValue[3].options[night];


   p1.innerHTML = `Wake UP Time: ${morning.innerHTML}`;
   p2.innerHTML = `Lunch Time: ${noon.innerHTML}`;
   p3.innerHTML = `Nap Time: ${evening.innerHTML}`;
   p4.innerHTML = `Night Time: ${sleep.innerHTML}`;
    
  
    if (parseInt(inputValue[0].value) === hrs) {
        text.innerHTML = 'GOOD MORNING !!!';
        imgShow.src = "Component 30 – 1.png"
    }
    else if (parseInt(inputValue[1].value) === hrs) {
        text.innerHTML = 'GOOD AFTERNOON !!!';
        imgShow.src = "lunch_image.png";
    }
    else if (parseInt(inputValue[2].value) === hrs) {
        text.innerHTML = 'GOOD EVENING';
        imgShow.src = "goodevening_image.png";
    }
    else if (parseInt(inputValue[3].value) === hrs) {
        text.innerHTML = 'GOOD NIGHT';
        imgShow.src = "good_night.png";
    }
}
