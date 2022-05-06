'use strict';
document.addEventListener('DOMContentLoaded', () => {
    const ta = new TxtAnimation('.animate-title');
    const ta2 = new TxtAnimation('.animate-title-2');
    setTimeout(() => {
        ta.animate();
        ta2.animate();
    }, 1000);

});
//クラスは「機能のまとまり」
class TxtAnimation {
    //クラスが初期化されるタイミングで呼ばれる関数
    constructor(el) {
        this.el = document.querySelector(el);
        this.chars = el.innerHTML.trim().split('');
        this.el.innerHTML = this._splitTxt();
    }
    _splitTxt() {
        return this.chars.reduce((ac, cur) => {
            cur = cur.replace(/\s+/, '&nbsp;');
            return `${ac}<span class="char">${cur}</span>`;
        }, "");
    }
    animate() {
        this.el.classList.toggle('inview');
    }
}