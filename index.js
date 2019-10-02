var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

// .push() adds elements to end of array - mutates array
function destructivelyAppendKitten(name){
  name.push();
  return name;
}

// .unshift() adds elements to beginning of array - mutates array
function destructivelyPrependKitten(name){
  name.unshift();
  return name;
}

// .pop() remove element from te end of array
function destructivelyRemoveLastKitten(){
  kitten.pop();
}

// .shift() removes element from the beginning of array
function destructivelyRemoveFirstKitten(){
  kitten.shift();
}

// ["", ...kittens] adds to beginning without mutations
function appendKitten(name) {
  [name, ...kittens];
}

// [...kittens, ""] adds to end without mutations
function prependKitten(name) {
  [...kittens, name];
}

function removeLastKitten() {
  
}

function removeFirstKitten() {
  
}

















