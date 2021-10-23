// スプレッド演算子でオブジェクトの結合
const person1 = {
    name : 'Tom',
    age : 15,
};

const person2 = {
    hobby : 'Football',
    address: 'Okinawa',
};

// スプレッド演算子でオブジェクトを結合
const person = { ...person1, ...person2 };
console.log( person );
