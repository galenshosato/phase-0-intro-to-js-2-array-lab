// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    return cats.push(name)
}

function destructivelyPrependCat(name) {
    return cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    return cats.pop()
}

function destructivelyRemoveFirstCat () {
    return cats.shift()
}

function appendCat(name) {
    let newCat = [...cats]
    newCat.push(name)
    return newCat
}

function prependCat(name) {
    let newCat = [...cats]
    newCat.unshift(name)
    return newCat
}

function removeLastCat() {
    let newCat=[...cats]
    newCat.splice(-1)
    return newCat
}

function removeFirstCat() {
    let newCat = [...cats]
    newCat.splice(0,1)
    return newCat
}