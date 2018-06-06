const NEW_SEASON_DATE = new Date("2018-07-01");
let COUNTDOWN_TIME = new Date ( NEW_SEASON_DATE - new Date() );

const daysDOM = document.querySelector("#days"); 
const hoursDOM = document.querySelector("#hours"); 
const minutesDOM = document.querySelector("#minutes"); 
const secondsDOM = document.querySelector("#seconds");

window.onload = () => {
    let d,h,m,s;
    setInterval(() => {
        d = COUNTDOWN_TIME.getDate();
        h = COUNTDOWN_TIME.getHours();
        m = COUNTDOWN_TIME.getMinutes();
        s = COUNTDOWN_TIME.getSeconds();
        daysDOM.innerHTML = ( (d < 10) ? `0${d}` : d ) ;
        hoursDOM.innerHTML = ( (h < 10) ? `0${h}` : h ) ;;
        minutesDOM.innerHTML = ( (m < 10) ? `0${m}` : m ) ;;
        secondsDOM.innerHTML = ( (s < 10) ? `0${s}` : s ) ;;
        COUNTDOWN_TIME = new Date ( NEW_SEASON_DATE - new Date() );
    }, 1000);
};