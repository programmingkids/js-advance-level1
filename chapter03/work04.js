// オブジェクトの分割代入と残りの値
const person = {
    name : 'Mike',
    age : 14,
    hobby : 'Piano',
    address : 'Miami',
};

// addressとhobbyを分割して代入、残りの値をまとめて代入
const {address, hobby, ...others} = person;
console.log( address ); // Miami
console.log( hobby ); // Piano
console.log( others ); // { name: 'Mike', age: 14 }
