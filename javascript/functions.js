
function printname() {

    console.log("Srikanth Reddy");
}

printname()

// add parameters

function add(n1,n2){

    console.log(n1+n2)

}

add(20,10)

//  Function With Return
function subtract(n1, n2) {
  return n1 - n2;
}

const subtractResult = subtract(30, 10);
console.log(subtractResult);

// Multiplication Function
function multiply(n1, n2) {
  return n1 * n2;
}

console.log(multiply(5, 6));

// Default Parameter
function greetUser(name = "Guest") {
  console.log("Hello " + name);
}

greetUser("Srikanth");
greetUser();

//  Function Calling Another Function
function printabc() {
  console.log("abc");
}

function printsri() {
  console.log("sri");
  printabc();
}

printsri();

//Function Returning Username
function getUsername() {
  return "Admin";
}

console.log(getUsername());
