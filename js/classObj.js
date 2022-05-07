const fruit = {
    name: "apple",
    weight: "310g",
    logStr: function() {
        console.log(this); //fruitを参照
        window.setTimeout(function() {
            console.log(this)
        }.bind({ name: "dorian" })); //thisの値を束縛する。アロー関数で指定するとなぜかbind()できないので注意。
    }
}

class MyFruit {
    constructor() {
        this.name = "orange";
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

///////////////////////