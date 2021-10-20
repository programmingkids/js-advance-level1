// everyメソッド
const numbers = [ 2, 4, 6, 8, 10, 12 ];

// すべての要素が2の倍数であるかの判定
const result1 = numbers.every(function( value ) {
    return value % 2 === 0;
});
console.log( result1 ); // true


// すべての要素が10未満であるかの判定
const result2 = numbers.every(function( value ) {
    return value < 10;
});
console.log( result2 ); // false
