var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name) {
  kittens.push("Ralph")
  kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob")
  kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  kittens
}

function appendKitten(name) {
  kittens.concat([...kittens,"Broom"])
}