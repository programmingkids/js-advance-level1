// substringメソッド
const text = 'abcde';

// インデックスが1以降を取り出す
// bcde
console.log( text.substring(1) );

// インデックスが1から3の範囲を取り出す
// bc
console.log( text.substring(1, 3));

// 負の数を指定すると0として考える
// abcde
console.log( text.substring(-1) );
