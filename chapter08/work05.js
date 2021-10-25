// mapメソッドで配列の数値を3倍
/*
mapメソッドを利用して、配列の各数値を3倍にした配列を作成します

実行結果
[ 9, 15, 18, 27, 6, 12 ]
*/

// 配列定義
let numbers = [ 3,5,6,9,2,4 ];

numbers = numbers.map(e => e * 3);
console.log( numbers );
