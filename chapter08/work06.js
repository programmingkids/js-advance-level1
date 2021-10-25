// filterメソッドで配列から特定の要素を取り出す
/*
filterメソッドを利用して、配列から3の倍数以外の数値を取り出して配列を作成します

実行結果
[ 5, 2, 4 ]
*/

// 配列定義
let numbers = [ 3,5,6,9,2,4 ];

numbers = numbers.filter(e => e % 3 !== 0);
console.log( numbers );
