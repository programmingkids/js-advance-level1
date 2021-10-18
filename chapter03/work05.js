// 配列に変換して分割代入

// カンマ区切りの文字列
const text = 'Johnny,Depp,17,New York,USA';

// 文字列をカンマ区切りで区切った配列に変換。その後、分割して代入
const [firstName, familyName, age, ...other] = text.split(',');

console.log( firstName ); // Johnny
console.log( familyName ); // Depp
console.log( age ); // 17
console.log( other ); // [ 'New York', 'USA' ]
