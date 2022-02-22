//////////////////////5/////////////////////////

let date1 = new Date("7/11/2012");
let date2 = new Date("12/6/2004");

console.log('First date: ' + date1 + '\nSecond date: ' + date2);

function diffDate(date1,date2) {
    let timeDiff = Math.abs(date2.getTime() - date1.getTime());//різниця в мілісекундах міє датами
    let diffSecond = Math.ceil(timeDiff / (1000));//кількість секунд
    let days =  diffSecond/(3600*24);//кількість днів
    let second = Math.trunc((days-Math.trunc(days))*3600*24);//кількість секунд після вирахуванння днів
    let week = Math.trunc(days/7);//кількість тижднів
    days = Math.trunc(days-week*7);//кількість днів після вирахуванння тиджнів

    console.log('Difference in seconds: ' + diffSecond + '\nWeeks: '+week+'\nDays: '+ days + '\nSeconds: '+ second);
}

diffDate(date1,date2);
