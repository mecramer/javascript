// While loops
//
// while (condition) {
//    statements
// }
//
// do {
//    statements
// } while (condition)

// the differences between the two is the do loop will run at least once no matter what
// because the conditional statement comes after the block execution

let total = 0

while (total < 30) {
    total += Math.floor(Math.random() * 5) + 1
    console.log('while', total)
}

do {
    total += Math.floor(Math.random() * 5) + 1
    console.log('do', total)
} while (total < 30)
