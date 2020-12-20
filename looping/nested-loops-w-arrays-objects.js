// nested loops and multi-dimensional objects
// We can use nested loops to access all the elements
// inside multi-dimensional arrays or objects

// See https://bit.ly/2Kqtjx1

let twoDimensional = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 10, 5, 7, 3, 22, 6, 42],
    [123, 54, 12, 11, 9, 15],
]

let Orioles = {
    players: [
        { name: 'Chris Davis', position: 'First Base' },
        { name: 'Trey Mancini', position: 'Right Field', prop: 12 },
        { name: 'Anthony Santander', position: 'Right Field' },
        { name: 'Ryan Mountcastle', position: 'Left Field' },
    ],
}

// nested for loops
let rows = twoDimensional.length // how many arrays are inside the outer array, answer: 3
// looping through the inner arrays
for (let i = 0; i < rows; i++) {
    // items is the length of the array at the given index number
    let items = twoDimensional[i].length
    console.log(`row ${i} has ${items} items`)
    // looping through each item in the inner array
    for (let n = 0; n < items; n++) {
        // we use brackets for [i] and [n] because they are variable names. dot notation doesn't work for variables
        console.log(`item ${n + 1} in the row is ${twoDimensional[i][n]}`)
    }
}

let chars = Orioles['players'] // could also be called Orioles.players
for (let i = 0, len = chars.length; i < len; i++) {
    //    console.log(chars[i]);
    //    console.log(chars[i].name);
    //    console.log(chars[i]['voice']);

    // because prop is a variable, .prop will return undefined, instead we need to use [prop]
    for (let prop in chars[i]) {
        console.log(prop, chars[i].prop, chars[i][prop])
    }
}
