// 配列の分割代入
/*
配列「person」から分割代入により、要素を変数として取り出す
1個目の要素の変数名：lastName
2個目の要素の変数名：firstName
3個目の要素の変数名：age

実行結果
山田
彩香
15
*/

// 配列定義
const person = ['山田', '彩香', 15, 'テニス' ];

// ここで分割代入により、1個目、2個目、3個目の要素を取り出す
const [lastName, firstName, age] = person;


// 以下の部分は修正してはいけません
console.log( lastName );
console.log( firstName );
console.log( age );
