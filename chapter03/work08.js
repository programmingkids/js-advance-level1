// 関数の引数で分割代入
function showPerson( {name, age, ...other} ) {
    console.log( `name is ${name}` );
    console.log( `age is ${age}` );
    for ( const [key, value] of Object.entries(other) ) {
        console.log( `${key} is ${value}` );
    }
}

const person = {
    name : 'Mike',
    age : 16,
    hobby : 'basketball',
    school : 'London High School',
    address : 'London',
};

showPerson( person );
