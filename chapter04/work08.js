// for-of文2
const magician = {
    name : 'Elsa',
    age : 17,
    hobby : 'magic',
    address : 'Yokohama',
};

for ( const key of Object.keys(magician) ) {
    console.log( key );
}
