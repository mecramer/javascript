// JavaScript for..in loops
var players = { Angels: 'Jo Adell', Rays: 'Vidal Brujan', Mariners: 'Julio Rodriguez' }
var ravens = ['Lamar Jackson', 'J.K. Dobbins', 'Justin Tucker', 'Patrick Queen']

// for an object, length will return undefined
console.log(players.length)

// so how do we loop through an object without knowing how many items there are
// answer: for in loop

// var in object
// this returns: Angels, Rays, Mariners
// props could be called anything, but its kind of like the keys or index
for (let prop in players) {
    console.log(prop)
}

// this will return: Jo Adell, Vidal Brujan, Julio Rodriguez
// here we have to use [prop] instead of .prop because prop is a variable name, not a string
for (let prop in players) {
    console.log(players[prop])
}

// putting key and value together in one statement
for (let prop in players) {
    console.log('On the', prop, 'we have', players[prop], 'in the minors.')
    // or with interpolation
    console.log(`On the ${prop} we have ${players[prop]} in the minors.`)
}

// looping through an array using for in
// in the array, prop is becoming the index, 0, 1, 2, 3
for (let prop in ravens) {
    console.log(`In ${prop} we have ${ravens[prop]}`)
}
