// Looping a triangle
// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######

function loopingTriangle(){
  let string = "#"
  for (let index = 0; index < 6; index++) {
    console.log(string)
    string += "#"
  }
}

loopingTriangle()


// FizzBuzz
// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

// When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those)

function FizzBuzz(){
  for (let index = 1; index <= 100; index++) {
    if(index % 3 == 0 && index % 5 == 0)console.log("FizzBuzz");
    else if(index % 3 === 0) console.log("Fizz")
    else if(index % 5 === 0) console.log("Buzz")
    else console.log(index)
  }
}

FizzBuzz()


// Chessboard
// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

// Passing this string to console.log should show something like this:

//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # #


function Chessboard(height, width){
  let board = ""
  let linesMade = 0
  while(linesMade < height){
    for (let index = 0; index < width; index++) {
      if((index + linesMade) % 2 === 0){
        board += " "
      }
      else board += "#"   
    }
    // console.log(board)
    board += "\n"
    linesMade++
  }
  return console.log(board)
}
Chessboard(9, 9)