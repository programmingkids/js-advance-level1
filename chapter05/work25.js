// 破壊的メソッドと非破壊的メソッド

// 破壊的メソッドの例
const data1 = [ 'a', 'b', 'c', 'd' ];

const result1 = data1.push('e');
// pushの戻り値は追加後の配列の要素数
console.log( result1 ); // 5
// data1そのものが変更されている
console.log( data1 ); // [ 'a', 'b', 'c', 'd', 'e' ]

console.log('====');

// 非破壊的メソッドの例
const data2 = [ 'a', 'b', 'c', 'd' ];

const result2 = data2.concat(['e']);
// concatの戻り値は結合した配列そのもの
console.log( result2 ); // [ 'a', 'b', 'c', 'd', 'e' ]
// data2は変更されていない
console.log( data2 ); // [ 'a', 'b', 'c', 'd' ]
