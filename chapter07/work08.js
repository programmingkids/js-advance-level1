// オブジェクトの分割代入と残りの値
const book = {
    title : 'エルサの冒険',
    price : 1200,
    author : 'エルサ',
    genre : 'SF小説',
};

// 分割代入と残りの値
const {title, price, ...others} = book;
console.log( title ); // エルサの冒険
console.log( price ); // 1200
console.log( others ); // { author: 'エルサ', genre: 'SF小説' }
