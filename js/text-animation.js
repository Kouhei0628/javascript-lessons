class TextAnimation {
    constructor(el) {
            this.DOM = {}; //渡ってきたオブジェクトリテラル(DOM)を格納
            this.DOM.el = el instanceof HTMLElement ? el : document.querySelector(el); //nodelistがHTML要素かどうかで処理を分岐
            this.chars = this.DOM.el.innerHTML.trim().split(""); //DOMの「配列」
            this.DOM.el.innerHTML = this._splitText();
        }
        //暗黙のプライベートメソッド
    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, "&nbsp;");
            return `${acc}<span class="char">${curr}</span>`; //個別アニメーションするようにspanに格納
        }, "");
    }
    animate() {
        this.DOM.el.classList.toggle("inview");
    }
}
class TweenTextAnimation extends TextAnimation {
    constructor(el) {
        super(el);
        this.DOM.chars = this.DOM.el.querySelectorAll(".char");
    }

    animate() {
        this.DOM.el.classList.add("inview");
        //forEach(配列,index番号,処理)
        this.DOM.chars.forEach((c, i) => {
            TweenMax.to(c, 0.6, {
                ease: Back.easeOut,
                delay: i * 0.05,
                startAt: { y: "-50%", opacity: 0 },
                y: "0%",
                opacity: 1,
            });
        });
    }
}