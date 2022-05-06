'use strict';
const btn = document.querySelector('#btn');
const h1 = document.querySelector('#title');

function changeColor() { h1.style.color = "orange" }

function changeBgColor() { h1.style.backgroundColor = "black" }

//第一引数にイベント名(type)、第二引数に処理名(listener)、
//第三引数にイベントフロー(useCapture、boolean型)。windowからその子へ目的のNodeに向かってイベントが走る流れのこと。
//trueは親要素から先に発火、falseはこ要素から先に発火
btn.addEventListener('click', changeColor);
btn.addEventListener('click', changeBgColor);