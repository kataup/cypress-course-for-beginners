// Global scope
var globalVar = "I'm global!";

function outerFunction() {
  // Outer function scope
  let outerVariable = 'I am outside!';

  function innerFunction() {
    // Inner function scope
    let innerVariable = 'I am inside!';
    console.log(outerVariable); // Accessible
    console.log(innerVariable); // Accessible
  }

  if (true) {
    // Block scope
    let blockVar = "I'm inside a block!";
    console.log(blockVar); // Accessible
  }

  const arrowFunction = () => { return 'I am an arrow function!' };

  innerFunction();
  console.log(globalVar); // Accessible
  console.log(innerVariable); // ReferenceError: innerVariable is not defined
  console.log(arrowFunction()); // Accessible
}
//outerFunction();

// function anotherOuterFunction() {
//   let outerVar = "I'm from the outer scope!";

//   function innerFunction() {
//     console.log(outerVar); // Accessing outerVar
//   }

//   return innerFunction;
// }

// const myInnerFunction = anotherOuterFunction();
//myInnerFunction(); // Outputs: I'm from the outer scope!

