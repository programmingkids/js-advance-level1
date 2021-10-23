// thisの取り扱い
const person = {
    name : 'Elsa',
    // メソッドの定義
    showName : function() {
        console.log( `My name is ${this.name}` );
    },
};

// オブジェクトを通してメソッドの呼び出し
person.showName(); // My name is Elsa

// オブジェクトからメソッドを取り出して、変数に代入する
const showName = person.showName;
// 変数を通してメソッドの呼び出し
showName(); // My name is undefined
