console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  const greeting = 'Hello World!';
  return greeting;
}

// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  console.log(`Hello`,name,`!`);
  return name;
}
helloName('Rickie');
// Remember to call the function to test


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;
  // return firstNumber + secondNumber;
}
console.log('in addNumbers', addNumbers(30,7));


// 4. Function to multiply three numbers & return the result
function multiplyThree( num1, num2, num3 ){
  return num1 * num2 * num3;
}
console.log(`in multiplyThree`,multiplyThree(8,10,10));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }else
    return false;
}
console.log(isPositive(1));
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let exampleArray = [3,5,7,9,11,13,15,17];
function getLast(array) {
  if(exampleArray.length > 0){
    let the_last_item = exampleArray[exampleArray.length -1];
    return the_last_item;
  }else{
    return 'undefined';
  }
}
console.log('last item in our array is', getLast(exampleArray));


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
let arrayTwo = [15,25,30,35,40,45,50];
function find( value, array ){
  for(num of array){
    console.log('number is:',num);
    if(num === value){
      console.log('number is a match');
      return true;
    }
  }
  for(num of array){
    if(num != value){
      return false;
    }
  }
}
console.log(find(30,arrayTwo));


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  let wordArray = [];
  for(let i=0; i<string.length; i++){
    wordArray.push(string[i]);
  }
  if(wordArray[0] === letter){
    return true;
  }else{
    return false;
  }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(startingPoint) {
  let sum = 0;
  let filler = 30;
  let array = [];
  array.push(startingPoint);
  if(startingPoint > filler){
    array.push(10,5,3);
  }else if (startingPoint <= filler){
    array.push(15,20,25);
  }
  console.log(array);
  for(num of array){
    sum += num;
  }
  console.log(`sum of the array is `,sum);
  return sum;
}
sumAll(30);
// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
