// for-in文2
const scores = {
    'English' : 90,
    'Math' : 92,
    'Japanese' : 88,
};

for ( const key in scores ) {
    console.log( `${key} is ${scores[key]}` );
}
