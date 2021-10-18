// for-of文3
const magician = {
    name : 'Elsa',
    age : 17,
    hobby : 'magic',
    address : 'Yokohama',
};

for ( const value of Object.values(magician) ) {
    console.log( value );
}
