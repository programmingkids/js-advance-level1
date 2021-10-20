// unshiftメソッドとshiftメソッド
const names = [ 'Tom', 'Meg', 'Ariel', 'Bell' ];

// unshiftで先頭に追加
const length = names.unshift( 'Bob' );
console.log( names );
console.log( length );

console.log('====');

// shiftで先頭から削除
const value = names.shift();
console.log( names );
console.log( value );
