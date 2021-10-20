// findメソッド
const fruits = [ 'orange', 'apple', 'grape', 'melon', 'apple', 'peach' ];

// 関数
const result1 = fruits.find(function ( value ) {
    return value === 'apple';
});
console.log( result1 ); // apple

console.log('====');

// アロー関数
const result2 = fruits.find(value => value === 'apple');
console.log( result2 ); // apple
