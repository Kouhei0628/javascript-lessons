"use strict";

function answer(answerMonth, answerDate) {
    window.alert("TODAY IS  " + answerMonth + "," + answerDate);
}
const calcMonth = function() {
    let now = new Date();
    let month = now.getMonth();
    const months = [
        "JANUARY",
        "FEBRUARY",
        "MARCH",
        "APRIL",
        "MAY",
        "JUNE",
        "JULY",
        "AUGUST",
        "SEPTEMBER",
        "OCTOBER",
        "NOVEMBER",
        "DECEMBER",
    ];
    const monthName = months[month];
    return monthName;
};
const calcDate = function() {
    let now = new Date();
    let date = now.getDate();
    return date;
};

answer(calcMonth(), calcDate());