const fruit = {
    name: "apple",
    weight: "310g",
    logStr: function() {
        console.log(this); //fruitを参照
        window.setTimeout(
            function() {
                console.log(this);
            }.bind({ name: "durian" }),
            1000
        ); //thisの値を束縛する。アロー関数は暗黙的にbindしてくれるので注意。
    },
};

console.log(this);
class MyFruit {
    //呼び出されるたびに初期化するメソッド
    constructor() {
        this.name = "orange"; //必ずthisに格納してあげる
        this.weight = 370;
    }
    logStr() {
        console.log(this.weight);
    }
}
//オブジェクト生成
const fruit2 = new MyFruit();

// console.log(fruit.name);
fruit.logStr();
// fruit2.logStr();

////////クラス継承
class Myfruit2 extends MyFruit {
    //extendsでクラスを継承する
    constructor() {
        super(); //親のコンストラクタが呼び出される
    }
    logStr() {
        console.log(this.weight * 2);
    }
}

const fruit3 = new Myfruit2();
fruit3.logStr();
console.log(fruit3.name);