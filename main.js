let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sc = document.querySelector('#sc');

setInterval(() => {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let hdeg = (h*30)+(m/2);
    let mdeg = (m*6);
    let sdeg = (s*6);

    hr.style.transform = `rotate(${hdeg}deg)`;
    mn.style.transform = `rotate(${mdeg}deg)`;
    sc.style.transform = `rotate(${sdeg}deg)`;

}, 1000);

let time = document.querySelector('#time');
setInterval(() => {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let hh = h > 12 ? h - 12 : h;
    let ampm = h >= 12 ? 'PM' : 'AM';

    //add 0 to single digit numbers
    hh = hh < 10 ? '0' + hh : hh;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    time.innerHTML = `
        <div id="hours" style="--clr:#ff2972;">${hh}</div>
        <div id="minutes" style="--clr:#fee800;">${m}</div>
        <div id="seconds" style="--clr:#04fc43;">${s}</div>
        <div id="ampm">${ampm}</div>
    `;
}, 1000);