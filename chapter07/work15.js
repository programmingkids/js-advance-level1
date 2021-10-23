// メソッド1
const person = {
    name : 'Elsa',
    age : 15,
    // メソッドの定義
    showName : function() {
        console.log( `My name is ${this.name}` );
    },
    // メソッドの定義
    showAge : function() {
        console.log( `I am ${this.age} years old` );
    },
};

// メソッドの呼び出し
person.showName();
person.showAge();
