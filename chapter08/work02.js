// スプレッド演算子で配列の結合
/*
2個の配列をスプレッド演算子で結合します
配列「data1」と「data2」を結合して、配列「color」を作成します

実行結果
[ 'red', 'blue', 'pink', 'green', 'yellow', 'purple' ]
*/

// 配列定義
const data1 = [ 'red', 'blue', 'pink' ];
const data2 = [ 'green', 'yellow', 'purple' ];

// ここでスプレッド演算子を利用して、配列「data1」と「data2」を
// 結合して、配列「color」を作成します
const color = [ ...data1, ...data2 ];


// 以下の部分は修正してはいけません
console.log( color );
