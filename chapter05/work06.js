// スプレッド演算子
const players = [ 'Tom', 'Meg', 'Suzy' ];

// コピー
const players2 = [ ...players ];
console.log( players2 );

// 追加
const players3 = [ 'Emma', ...players, 'Ron' ];
console.log( players3 );

// 結合
const num1 = [ 10, 12, 14 ];
const num2 = [ 20, 25 ];

const num3 = [ ...num1, ...num2 ];
console.log( num3 );
