"use strict";

function answer(answerMonth, answerDate) {
    console.log("TODAY IS  " + answerMonth + "," + answerDate);
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

///////////////////////////////////
function calculate(a, b, callback) {
    const result = callback(a, b);
    console.log(result);
}

function power(a, b) {
    return a ** b;
}

function plus(a, b) {
    return a + b;
}
calculate(8, 4, power);
calculate(8, 68, plus);

////////////////////////
const array = [1, 2, 3, 4, 5, 6];

function forEach(ary, callback) {
    for (let i = 0; i < ary.length; i++) {
        callback(ary[i]);
    }
};

function log(value) {
    console.log(value);
}

function half(val) {
    val = val / 2;
    log(val);
}

function double(val) {
    val = val * 2;
    log(val);
}

forEach(array, log);
forEach(array, half);
forEach(array, double);