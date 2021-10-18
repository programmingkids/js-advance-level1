// スプレッド演算子1
const data = [ 'apple','orange','melon' ];

// スプレッド演算子で配列「data」の要素を展開して、他の要素と結合
const fruits = [ 'peach', 'grape', ...data ];
console.log( fruits ); // [ 'peach', 'grape', 'apple', 'orange', 'melon' ]
