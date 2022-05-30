const numArr = [1, 2, 3, 4, 5];

numArr.map((n, i) => console.log(n, i));

console.log("-----------------");

const numArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filArr = numArr2.filter((n) => n % 2 === 0);
filArr.map((n, i) => console.log(n, i));

console.log("-----------------");

const extractNum = numArr2.map((n) => {
    if (n % 2 === 0) {
        return `${n} is an even number.`;
    } else {
        return `${n} is not an even number.`;
    }
});
extractNum.map((n) => console.log(n));

console.log("-----------------");

const judgedNum = (el) => {
    return typeof el === "number" ?
        el.toLocaleString() :
        `"${el}" is not a number.`;
};

console.log(judgedNum(1555765523));
console.warn(judgedNum("Godzilla vs Kong"));

const a = true;
const b = false;

const judge = a || b;
const judge2 = !(a && b);

console.log(judge);
console.log(judge2);