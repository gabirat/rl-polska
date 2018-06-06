const NEW_SEASON_DATE = new Date("01-07-2018");
const CURRENT_TIME = new Date();
const COUNTDOWN_TIME = NEW_SEASON_DATE - CURRENT_TIME;

const daysDOM = document.querySelector("#days"); 
const hoursDOM = document.querySelector("#hours"); 
const minutesDOM = document.querySelector("#minutes"); 
const secondsDOM = document.querySelector("#seconds");
//TODO: FIX IT
window.onload = () => {
    let d,h,m,s;
    d = COUNTDOWN_TIME.getDate();
    h = COUNTDOWN_TIME.getHours();
    m = COUNTDOWN_TIME.getMinutes();
    s = COUNTDOWN_TIME.getSeconds();
    setInterval(() => {
        daysDOM.innerHTML = d;
        hoursDOM = h;
        minutesDOM = m;
        secondsDOM = s;
        d--;
        h--;
        m--;
        s--;
    }, 1000);
};