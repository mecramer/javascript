// JavaScript for loops

const names = [
    'Jeff Lebowski',
    'Donnie Kerabtsos',
    'Walter Sobchak',
    'Bunny Lebowsky',
    'Karl Hungus',
    'Brandt',
    'Maude Lebowski',
    'Jackie Treehorn',
]
const numNames = names.length

// initialize, test, increment
for (let i = 0; i < numNames; i++) {
    console.log(names[i])
}

// to go through the same array backwards
for (let i = numNames - 1; i > 0; i--) {
    console.log(names[i])
}
