// someメソッド
const numbers = [ 2, 3, 4, 7, 9, 12 ];

// 4の倍数が含まれているかの判定
const result1 = numbers.some(function( value ) {
    return value % 4 === 0;
});
console.log( result1 ); // true

// 5の倍数が含まれているかの判定
const result2 = numbers.some(function( value ) {
    return value % 5 === 0;
});
console.log( result2 ); // false
