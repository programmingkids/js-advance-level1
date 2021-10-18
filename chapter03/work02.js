// 配列の分割代入と残りの値
const colors = ['red', 'blue', 'yellow', 'pink', 'purple'];

// 1番目、2番目、3番目を分割して代入、残りの値をまとめて代入
const [x, y, z, ...others] = colors;
console.log( x ); // red
console.log( y ); // blue
console.log( z ); // yellow
console.log( others ); // [ 'pink', 'purple' ]
