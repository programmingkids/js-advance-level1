// sliceメソッド
const data = [ 'a', 'b', 'c', 'd', 'e' ];

// インデックス1から4の範囲を取り出す
// ["b", "c", "d"]
console.log( data.slice(1, 4) );

// 第2引数を省略した場合は、第1引数から末尾の要素までを取り出す
// ["b", "c", "d", "e"]
console.log( data.slice(1) );

// マイナスを指定すると後ろからの数えた位置となる
// ["e"]
console.log( data.slice(-1) );

// 第1引数と第2引数が同じ場合は、空の配列を返す
// []
console.log( data.slice(1, 1) );
