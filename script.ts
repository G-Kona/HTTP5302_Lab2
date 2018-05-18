enum days {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

enum months {
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
}

//PART 1
let today : Date = new Date();
var todayMsg = `Today is ${days[today.getDay()]} ${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}.`;
document.querySelector('#p--today-date').innerHTML = todayMsg;

//PART 2
let btn = document.querySelector("#button--birthday");
btn.addEventListener("click", function () {
    document.querySelector('#p--birthday-message').innerHTML = mybday(new Date(document.querySelector('#input--date-picker').value));
});

function mybday(bday: Date) {
    var bdayMsg = `Your birthday will be on ${days[bday.getDay()]} ${months[bday.getMonth()]} ${bday.getDate()}, ${bday.getFullYear()}.`;
    var todayCheck = `${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;
    var bdayCheck =  `${months[bday.getMonth()]} ${bday.getDate()}, ${bday.getFullYear()}`;
    if (bdayCheck == todayCheck) {
        bdayMsg = "HappyBirthday!"
    }
    return bdayMsg;
}
