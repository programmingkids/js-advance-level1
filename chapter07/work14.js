// entriesメソッド
const title = 'エルサの冒険';
const price = 1200;
const author = 'エルサ';
const genre = '小説';
const book = { title, price, author, genre };

// オブジェクトのキーと値を2次元配列で取得
const pairs = Object.entries(book);
console.log( pairs );

console.log('====');

// キーと値の2次元配列に対して、mapメソッドを呼び出す
Object.entries(book).map(p => console.log( p[0] + ' ==> ' + p[1]));
