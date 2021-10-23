// プロパティの削除
const name = 'Anna';
const age = 13;
const hobby = '冒険';
const address = '千葉';

const person = { name, age, hobby, address};
console.log( person );

// プロパティの削除
delete person.hobby;
delete person['address'];

console.log( person );
