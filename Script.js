function dec(btn) {
    const span = btn.querySelector('.displayCounter');
    const current = Number(span.textContent);
    if (current > 0) {
        span.textContent = current - 1;
    }
}

function inc(){
    const numSpan = document.getElementById('NumZikr');
    const currentB = Number(numSpan.textContent);
    numSpan.textContent = currentB + 1 ;
}

let zikrNowCont = document.getElementById('zikrNow');
const now = new Date();
let currentHour = now.getHours();
let link = document.getElementById('link');
function zikrNowSys(){
    if(currentHour <= 12){
        zikrNowCont.textContent = 'Time For Morning Azkar'
        link.href = "Pages/Morning.html"
    } else if (currentHour > 12){
        zikrNowCont.textContent = 'Time For Evening Azkar'
        link.href = "Pages/Evening.html"
    } else if(currentHour > 20){
        zikrNowCont.textContent = 'Time Sleep Azkar'
        link.href = "Pages/Sleep.html"
    }
}

zikrNowSys()