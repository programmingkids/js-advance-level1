// forEachメソッド
const numbers = [ 2, 3, 5, 6, 8, 9, 10 ];

// 関数
numbers.forEach(function( n ) {
    console.log( n * 2 );
});

console.log('====');

// アロー関数
numbers.forEach(n => console.log( n * 2 ));
