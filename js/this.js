'use strict';
document.addEventListener('DOMContentLoaded', () => {
    const el1 = new changeTxt("a@ge@a@ge@");
    const el2 = new changeTxt("1@6@@5@166@888@");
    console.log(el1);
    console.log(el2);
});

//thisは場所によって参照先が違う
console.log(this);

class changeTxt {
    constructor(el) {
        this.el = el;
        this._countTxt();
    }
    _countTxt() {
        setTimeout(() => {
            console.log(this.el.length);
        }, 1000);
    }
}