// valuesメソッド
const title = 'エルサの冒険';
const price = 1200;
const author = 'エルサ';
const genre = '小説';
const book = { title, price, author, genre };

// オブジェクトの値を配列で取得
const values = Object.values(book);
console.log( values );

console.log('====');

// 値の配列に対して、mapメソッドを呼び出す
Object.values(book).map(v => console.log(v));
