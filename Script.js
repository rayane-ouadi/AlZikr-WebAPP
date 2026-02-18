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
        zikrNowCont.textContent = "Time For Morning Azkar"
        link.href = "Pages/Morning.html"
    } else if (currentHour > 12){
        zikrNowCont.textContent = 'Time For Evening Azkar'
        link.href = "Pages/Evening.html"
    }
}

const saved = localStorage.getItem("theme") || "azmor";
document.documentElement.setAttribute("data-theme", saved)
function setTheme(name){
    document.documentElement.setAttribute("data-theme", name);
    localStorage.setItem("theme", name)
}

const savedSize = localStorage.getItem("fontSize") || "azmor";
document.documentElement.setAttribute("data-fontS", saved)
function setSize(name){
    document.documentElement.setAttribute("data-fsize", name);
    localStorage.setItem("fontSize", name)
}


zikrNowSys()