// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]


function destructivelyAppendCat(name) {
//     cats.push(name)
cats.splice(3, 0, name)
 }

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    cats.splice(-1)
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
    const newCats = cats.slice()
    newCats.push(name)
    return newCats
}

function prependCat(name) {
    const newCats = cats.slice()
    newCats.unshift(name)
    return newCats
}

function removeLastCat() {
    const newCats = cats.slice()
    newCats.pop()
    return newCats
}

function removeFirstCat() {
    const newCats = cats.slice()
    newCats.shift()
    return newCats
}




