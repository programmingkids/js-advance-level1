// オブジェクトの分割代入
/*
オブジェクト「character」から分割代入により、要素を変数として取り出す
1個目の要素の変数名：name
2個目の要素の変数名：job
3個目の要素の変数名：level

実行結果
名前: ドナルド
職業: 勇者
レベル: 5
*/

// オブジェクトの定義
const character = {
    name : 'ドナルド',
    job : '勇者',
    hp : 20,
    level : 5,
};

// ここで分割代入により、「name」「job」「level」を取り出す



// 以下の部分は修正してはいけません
console.log( `名前: ${name}` );
console.log( `職業: ${job}` );
console.log( `レベル: ${level}` );
