// filterメソッド
const numbers = [ 2, 3, 5, 6, 8, 9, 10 ];

// 関数
const result1 = numbers.filter(function( n ) {
    return n % 3 === 0;
});
console.log( result1 );

console.log('====');

// アロー関数
const result2 = numbers.filter( n => n % 3 === 0 );
console.log( result2 );
