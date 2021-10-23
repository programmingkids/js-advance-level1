// プロパティの追加
const name = 'Anna';
const age = 13;
const hobby = '冒険';
const address = '千葉';

const person = { name, age, hobby, address};
console.log( person );

// プロパティの追加
person.music = 'アニソン';
person['movie'] = 'アクション';

console.log( person );
