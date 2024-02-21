//date
const months=['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'],monthMin = ['','','','','','','','','','','',''],days = ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'],daysMin = ['','','','','','',''],seasons = ['invierno','primavera','verano','otoño'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull","monthOnly","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, false), monthOnly: getMonthName(_month, monthsName, false, counter), year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}

let doors = document.querySelectorAll('.door');
let doorSales = document.querySelectorAll('.door__sales');
let doorWrapper = document.querySelector('.door__wrapper');
let spinResultWrapper = document.querySelector('.spin-result-wrapper');
let orderBlock = document.querySelector('#order');
let door1 = document.getElementById('door__1');
let door2 = document.getElementById('door__2');
let door3 = document.getElementById('door__3');
let doorSale1 = document.getElementById('door__sales1');
let doorSale2 = document.getElementById('door__sales2');
let doorSale3 = document.getElementById('door__sales3');

let discount = '50%'; //
doors.forEach(function (door) {
    door.addEventListener('click', openDoor);
});

var closePopup = document.querySelector('.close-popup');
$('.pop-up-button').click(function (a) {
    $('.spin-result-wrapper').fadeOut();
    a.preventDefault();

    $('.spin-result-wrapper').fadeOut();
    var b = $('#roll').offset().top;
    $('body,html').animate();
});
$('.close-popup, .pop-up-button').click(function (a) {
    $('.spin-result-wrapper').fadeOut();
    a.preventDefault();

    $('.spin-result-wrapper').fadeOut();
});

function openDoor(e) {
    e.currentTarget.classList.add('open');
    //должна выпадать всплывашка после открытие 1й двери

    setTimeout(function () {
        spinResultWrapper.style.display = 'block';
        setTimeout(function () {
            orderBlock.style.display = 'block';
            doorWrapper.style.display = 'none';
            document.querySelector('.door__head').style.display = 'none';
            start_timer && start_timer();
        }, 3500);
    }, 1500);

    doorSales.forEach(function (sale) {
        if (door1.classList.contains('open')) {
            doorSale1.innerHTML = discount;
            // doorSale1.style.left = "12px";

            doorSale2.innerHTML = discount === '50%' ? '25%' : '50%';
            // doorSale2.style.left = "30px";

            doorSale3.innerHTML = discount === '50%' ? '10%' : '25%';
            // doorSale3.style.left = "32px";
        } else if (door2.classList.contains('open')) {
            doorSale2.innerHTML = discount;
            // doorSale2.style.left = "12px";

            doorSale1.innerHTML = discount === '50%' ? '10%' : '25%';
            // doorSale1.style.left = "32px";

            doorSale3.innerHTML = discount === '50%' ? '25%' : '50%';
            // doorSale3.style.left = "30px";
        } else if (door3.classList.contains('open')) {
            doorSale1.innerHTML = discount === '50%' ? '25%' : '50%';
            // doorSale1.style.left = "30px";

            doorSale3.innerHTML = discount;
            // doorSale3.style.left = "12px";

            doorSale2.innerHTML = discount === '50%' ? '10%' : '25%';
            // doorSale2.style.left = "32px";
        }
    });

    for (let i = 0; i < doors.length; i++) {
        if (!doors[i].classList.contains('open')) {
            setTimeout(function () {
                doors[i].classList.add('open');
            }, 2500);
        }
    }

    for (let j = 0; j < doors.length; j++) {
        doors[j].removeEventListener('click', openDoor);
    }
}

var time = 600;
var intr;

function start_timer() {
    intr = setInterval(tick, 1000);
}

function tick() {
    time = time - 1;
    var mins = Math.floor(time / 60);
    var secs = time - mins * 60;
    if (mins == 0 && secs == 0) {
        clearInterval(intr);
    }
    secs = secs >= 10 ? secs : '0' + secs;
    mins = mins >= 10 ? mins : '0' + mins;
    $('#min').html(mins);
    $('#sec').html(secs);
}


var linkNav = document.querySelectorAll('[href^="#"]'),
V = 0.05;
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) {
        e.preventDefault();
        var w = window.pageYOffset,
        hash = this.href.replace(/[^#]*(.*)/, '$1');
        t = document.querySelector(hash).getBoundingClientRect().top,
        start = null;
        requestAnimationFrame(step);
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
            r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step);
            } else {
                location.hash = hash;
            }
        }
    }, false);
}