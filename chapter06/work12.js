// sliceメソッド
const text = 'abcde';

// インデックスが1以降を取り出す
// bcde
console.log( text.slice(1) ); 

// インデックスが1から3の範囲を取り出す
// bc
console.log( text.slice(1, 3));

// 負の数を指定すると最後尾から取り出す
// e
console.log( text.slice(-1) );
