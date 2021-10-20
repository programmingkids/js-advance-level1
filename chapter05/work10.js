// reduceメソッド
const numbers = [ 2, 3, 5, 6, 8, 9, 10 ];

// 関数
const total1 = numbers.reduce(function( accumulator, n ) {
    return accumulator + n;
}, 0);
console.log( total1 ); // 43

console.log('====');

// アロー関数
const total2 = numbers.reduce(( accumulator, n ) => accumulator + n, 0);
console.log( total2 ); // 43
