let hh = document.getElementById("hour");
let mm = document.getElementById("min");
let ss = document.getElementById("sec");
let date = document.getElementById("dt");
const zero = "0";


    // function to display  time in html page

function displayTime()
{
    //  code to get time and date from system 
    const time =new Date();
    const hour = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();
    const dt = time.getDate();
    const mt = time.getMonth();
    const yr = time.getFullYear();
    
    //code to display time and date.  if time is single digit shows a zero before displaying it 
    
    date.innerHTML =  dt + " . " +mt + " . " + yr;
    //
    if (hour < 10) {
        hh.innerHTML = zero + hour + "<br>" + "Hour";    
    }else
    {
    hh.innerHTML = hour+ "<br>" + "Hour";
    }

    if (min < 10 ) {
        mm.innerHTML = zero + min + "<br>"+"Min";
        
    } else {
        mm.innerHTML = min + "<br>" + "Min";
        
    }

    if (sec < 10 ) {

        ss.innerHTML = zero + sec + "<br>" + "SEC";
    } else {
        ss.innerHTML = sec + "<br>" + "Sec";
    }

}

    // recall the function every second to continuesly update the time 
    setInterval(displayTime, 1000);