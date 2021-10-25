// スプレッド演算子でオブジェクトの結合
/*
2個のオブジェクトをスプレッド演算子で結合します
オブジェクト「data1」と「data2」を結合して、オブジェクト「character」を
作成します

実行結果
{ name: 'エルサ', age: 16, job: '魔法使い', hp: 15, mp: 40 }
*/

// オブジェクト定義
const data1 = {
    name : 'エルサ',
    age : 16,
};

const data2 = {
    job : '魔法使い',
    hp : 15,
    mp : 40,
};

// ここでスプレッド演算子を利用して、オブジェクト「data1」と「data2」を
// 結合して、オブジェクト「character」を作成します
const character = { ...data1, ...data2 };


// 以下の部分は修正してはいけません
console.log( character );
