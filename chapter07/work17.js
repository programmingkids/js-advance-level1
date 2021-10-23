// メソッド3
// コンストラクタ関数の定義
const Person = function(name, age) {
    this.name = name;
    this.age = age;
};

// メソッドの定義
Person.prototype.showName = function() {
    console.log( `My name is ${this.name}` );
};

Person.prototype.showAge = function() {
    console.log( `I am ${this.age} years old` );
};

// オブジェクト作成
const p1 = new Person('Elsa', 15);
// メソッドの呼び出し
p1.showName();
p1.showAge();
