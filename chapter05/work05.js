// 分割代入との残りの値
const foods = [ 'ピザ', '寿司', 'ハンバーグ', 'ラーメン', 'カレー' ];

const [ pizza, sushi, ...others ] = foods;

console.log( pizza );
console.log( sushi );
console.log( others );
