// sortメソッド
const fruits = [ 'peach', 'grape', 'banana', 'apple', 'melon' ];

console.log( fruits );
fruits.sort();
console.log( fruits );

console.log('====');

const numbers = [ 10, 5, 7, 2, 4, 9 ];

console.log( numbers );
numbers.sort((a, b) => {
    return a > b;
});
console.log( numbers );
