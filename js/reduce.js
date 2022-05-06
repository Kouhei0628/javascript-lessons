const array = [1, 2, 3, 4, 5];

//accuには前のループの戻り値、currには配列が設定される。3引数には初期値のaccu
array.reduce(function(accu, curr) {
    console.log(accu, curr);
    return accu + curr;
}, 10);

//////////////////////////////
const string = "communication";
const strArry = string.split("");


const result = strArry.reduce((ac, cur) => {
    console.log(ac);
    return `${ac}|${cur}|`;
}, "");

console.log(result); //|c||o||m||m||u||n||i||c||a||t||i||o||n|

//コールバック関数化
function tag(accu, curr) { return `${accu}¥${curr}¥`; };

function reduce(arry, callback, defaultVal) {
    let accu = defaultVal;

    for (let i = 0; i < arry.length; i++) {
        let curr = arry[i];
        accu = callback(accu, curr);
    }
    //文字列が結合したものが返される
    return accu;
}

const resultB = reduce(strArry, tag, "");

console.log(resultB); //¥c¥¥o¥¥m¥¥m¥¥u¥¥n¥¥i¥¥c¥¥a¥¥t¥¥i¥¥o¥¥n¥