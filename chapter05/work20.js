// spliceメソッド
const data1 = [ 'a', 'b', 'c', 'd' ];
const data2 = [ 'a', 'b', 'c', 'd', 'e' ];

// 1番目から2個の要素を削除
data1.splice(1,2);
console.log( data1 ); // [ 'a', 'd' ]

// 2番目から最後まで削除
data2.splice(2);
console.log( data2 ); // [ 'a', 'b' ]
