// bringing in today's date and get weekday
const todayDate = new Date();
let weekDay = todayDate.getDay();

let message1;

switch(weekDay) {
    case 0:
        message1 = "Sunday";
        break;
    case 1:
        message1 = "Monday";
        break;
    case 2:
        message1 = "Tuesday";
        break;
    case 3:
        message1 = "Wednesday";
        break;
    case 4:
        message1 = "Thursday";
        break;
    case 5:
        message1 = "Friday";
        break;
    case 6:
        message1 = "Saturday";
        break;
}

document.querySelector("#message1").textContent = message1;