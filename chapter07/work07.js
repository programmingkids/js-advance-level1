// オブジェクトの分割代入
const book = {
    title : 'エルサの冒険',
    price : 1200,
    author : 'エルサ',
    genre : 'SF小説',
};

// 分割代入
const {title, price} = book;
console.log( title ); // エルサの冒険
console.log( price ); // 1200
