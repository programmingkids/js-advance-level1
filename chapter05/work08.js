// mapメソッド
const numbers = [ 2, 3, 5, 6, 8, 9, 10 ];

// 関数
const result1 = numbers.map(function( n ) {
    return n * 2;
});
console.log( result1 );

console.log('====');

// アロー関数
const result2 = numbers.map( n => n * 2 );
console.log( result2 );
