// 分割代入で値の交換

let name1 = 'Elsa';
let name2 = 'Anna';

console.log(`name1 is ${name1}`); // Elsa
console.log(`name2 is ${name2}`); // Anna

console.log('=====');

// 分割代入で値の交換
[name2, name1] = [name1, name2];

console.log(`name1 is ${name1}`); // Anna
console.log(`name2 is ${name2}`); // Elsa
