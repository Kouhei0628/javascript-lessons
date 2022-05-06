'use strict';

const array = [1, 2, 3, 4, 5, 6];

//forEach()は第一引数にvalue、2にindex、3に配列（そのもの）が渡る
array.forEach(function(value, i, ary) {
    console.log(value, i, ary);
});

array.forEach(value => console.log(value)); //めちゃコンパクト