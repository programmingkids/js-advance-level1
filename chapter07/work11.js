// for-in文
const title = 'エルサの冒険';
const price = 1200;
const author = 'エルサ';
const genre = '小説';
const book = { title, price, author, genre };

for ( const key in book ) {
    console.log( `${key} ===> ${book[key]}`);
}
