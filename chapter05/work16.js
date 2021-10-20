// pushメソッドとpopメソッド
const names = [ 'Tom', 'Meg', 'Ariel', 'Bell' ];

// pushで最後尾に追加
const length = names.push('Bob');
console.log( names );
console.log( length );

console.log('====');

// popで最後尾から削除
const value = names.pop();
console.log( names );
console.log( value );
