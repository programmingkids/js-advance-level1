// オブジェクトの分割代入
const person = {
    name : 'Mike',
    age : 14,
    hobby : 'Piano',
    address : 'Miami',
};

// nameとageを分割して代入
const {name, age } = person;
console.log(name); // Mike
console.log(age); // 14
