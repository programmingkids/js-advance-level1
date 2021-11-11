// thisの取り扱い
const person = {
    name : 'Elsa',
    // メソッドの定義
    showName : function() {
        console.log( `My name is ${this.name}` );
    },
};

