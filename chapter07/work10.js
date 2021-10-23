// in演算子でプロパティの存在確認
const math = 90;
const english = 94;
const Japanese = 88;

const scores = { math , english, Japanese };

if( 'math' in scores ) {
    console.log( 'scoresにmathが存在します' ); // ここ
} else {
    console.log( 'scoresにmathが存在しません' );
}

if( 'science' in scores ) {
    console.log( 'scoresにscienceが存在します' );
} else {
    console.log( 'scoresにscienceが存在しません' ); // ここ
}
