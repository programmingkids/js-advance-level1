// keysメソッド
const title = 'エルサの冒険';
const price = 1200;
const author = 'エルサ';
const genre = '小説';
const book = { title, price, author, genre };

// オブジェクトのプロパティ（キー）を配列で取得
const keys = Object.keys(book);
console.log( keys );

console.log('====');

// プロパティ（キー）の配列に対して、mapメソッドを呼び出す
Object.keys(book).map(k => console.log(k));
