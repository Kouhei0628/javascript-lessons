class scrollObserver {
    constructor(els, cb, options) {
        this.els = document.querySelectorAll(els);
        const defaultOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0,
            once: true, //一度画面に入ったか判断
        };
        this.cb = cb;
        this.options = Object.assign(defaultOptions, options); //デフォルトオプションに引数に渡ってきたオプションを対応させる
        this._init();
        this.once = this.options.once;
        console.log(this);
    }
    _init() {
        //初期化処理
        const callback = function(entries, observer) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.cb(entry.target, true);
                    if (this.once) {
                        //一度画面に入ったら
                        observer.unobserve(entry.target); //監視の登録を解除
                    }
                } else {
                    this.cb(entry.target, false);
                }
            });
        };
        this.io = new IntersectionObserver(callback.bind(this), this.options);
        this.io.POLL_INTERVAL = 100; //polyfillはintersectionobserverがブラウザ対応していない時のための代替scoll監視機能
        //m秒で監視インターバルを設定する
        this.els.forEach((el) => this.io.observe(el));
    }
    destroy() {
        this.io.disconnect(); //intersectionobserver内での対象の監視を止める。
    }
}