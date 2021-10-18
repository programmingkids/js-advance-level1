// スプレッド演算子3
function multiply(x, y, z) {
    const answer = x * y * z;
    return answer;
}

const numbers = [2, 4, 5];

// スプレッド演算子で配列の要素を展開して、関数の引数として呼び出す
const result = multiply( ...numbers );
console.log( result ); // 40
