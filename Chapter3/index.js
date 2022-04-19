//1. Write a function min that takes two arguments and returns their minimum.
function detMin(a, b) {
    return a > b ? b : a;
}

//2We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:
// • Zero is even.
// • One is odd.
// • For any other number N, its evenness is the same as N - 2.
// Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.
// Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
function isEven(n) {
    if (n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return isEven(-n);
    else return isEven(n - 2);
  }

//   Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.
function countBs(str){
    let numBs = 0
    for(let i=0; i<str.length; i++){
      if(str[i] === 'B'){
        numBs += 1
      } 
    } return numBs
  } 

//Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
function countChar(str, char){
    let numChar = 0
    for(let i=0; i<str.length; i++){
      if(str[i] === char){
        numChar += 1
      } 
    } return numChar
  } 

  //Looping a triangle
//   Write a loop that makes seven calls to console.log to output the following triangle:
//  #
//  ##
//  ###
//  ####
//  #####
//  ######
//  #######
function makeTriangle(height){
    for(let line = '#'; line.length <= height; line += '#') {
        console.log(line)
    }
}

makeTriangle(7)


//FizzBuzz
// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
// When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
for(let i= 1; i<=100; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz')
  } else if(i % 3 === 0){
    console.log('Fizz')
  } else if(i % 5 === 0) {
    console.log('Buzz')
  } else console.log(i)
  }

  //ChessBoard

// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
// // Passing this string to console.log should show something like this:
//  # # # # 
// # # # #
//  # # # # 
// # # # #
//  # # # # 
// # # # #
//  # # # # 
// # # # #


// When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid
// of the given width and height.