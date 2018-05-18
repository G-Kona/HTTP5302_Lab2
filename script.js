var days;
(function (days) {
    days[days["Sunday"] = 0] = "Sunday";
    days[days["Monday"] = 1] = "Monday";
    days[days["Tuesday"] = 2] = "Tuesday";
    days[days["Wednesday"] = 3] = "Wednesday";
    days[days["Thursday"] = 4] = "Thursday";
    days[days["Friday"] = 5] = "Friday";
    days[days["Saturday"] = 6] = "Saturday";
})(days || (days = {}));
var months;
(function (months) {
    months[months["January"] = 0] = "January";
    months[months["February"] = 1] = "February";
    months[months["March"] = 2] = "March";
    months[months["April"] = 3] = "April";
    months[months["May"] = 4] = "May";
    months[months["June"] = 5] = "June";
    months[months["July"] = 6] = "July";
    months[months["August"] = 7] = "August";
    months[months["September"] = 8] = "September";
    months[months["October"] = 9] = "October";
    months[months["November"] = 10] = "November";
    months[months["December"] = 11] = "December";
})(months || (months = {}));
//PART 1
var today = new Date();
var todayMsg = "Today is " + days[today.getDay()] + " " + months[today.getMonth()] + " " + today.getDate() + ", " + today.getFullYear() + ".";
document.querySelector('#p--today-date').innerHTML = todayMsg;
//PART 2
var btn = document.querySelector("#button--birthday");
btn.addEventListener("click", function () {
    document.querySelector('#p--birthday-message').innerHTML = mybday(new Date(document.querySelector('#input--date-picker').value));
});
function mybday(bday) {
    var bdayMsg = "Your birthday will be on " + days[bday.getDay()] + " " + months[bday.getMonth()] + " " + bday.getDate() + ", " + bday.getFullYear() + ".";
    var todayCheck = months[today.getMonth()] + " " + today.getDate() + ", " + today.getFullYear();
    var bdayCheck = months[bday.getMonth()] + " " + bday.getDate() + ", " + bday.getFullYear();
    if (bdayCheck == todayCheck) {
        bdayMsg = "HappyBirthday!";
    }
    return bdayMsg;
}
