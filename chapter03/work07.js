// 分割代入のデフォルト値
const text1 = '山田:17:音楽';

// デフォルト値ありで代入するが、デフォルト値は利用しない
const [name = '名無し', age = 0, hobby = '特になし'] = text1.split(':');
console.log( name ); // 山田
console.log( age ); // 17
console.log( hobby ); // 音楽

console.log('=====');

const text2 = '田中';

// デフォルト値ありで代入 age2とhobby2はデフォルト値を利用する
const [name2 = '名無し', age2 = 0, hobby2 = '特になし'] = text2.split(':');
console.log( name2 ); // 田中
console.log( age2 ); // 0
console.log( hobby2 ); // 特になし
