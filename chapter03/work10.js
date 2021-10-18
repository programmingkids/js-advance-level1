// スプレッド演算子2
const numbers1 = [4, 3];

// 配列のコピー
const numbers2 = [ ...numbers1 ];
console.log( numbers2 ); // [ 4, 3 ]

// 要素を追加して新しい配列を生成
const numbers3 = [ ...numbers1, 7, 9 ];
console.log( numbers3 ); // [ 4, 3, 7, 9 ]

// 配列を結合
const colors1 = ['red', 'blue'];
const colors2 = ['pink', 'orange'];

const colors3 = [ ...colors1, ...colors2 ];
console.log( colors3 ); // [ 'red', 'blue', 'pink', 'orange' ]
