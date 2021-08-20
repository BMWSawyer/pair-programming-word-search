// 1.   Project Name: Pair Programming - Word Search Challenge
// 2.   File Name: wordsearch.js
// 3.   Written By: Brad Sawyer & TJ Blinn
// 4.   Date: 19th August, 2021 & 20th August, 2021
// 5.   Purpose: This challenge tests our ability with the FOCAL concepts we've learned thus far in
//               the course. The challenge is to see whether a given word is in a 2D array either
//               horizontally or vertically. If so it returns true, otherwise it returns false.



//This is the main word search function. We've modularized the rest of the functions so that this is as simple as possible
const wordSearch = (letters, word) => {
  if (horizontalCheck(letters, word) || verticalCheck(letters, word)) {
    return true;
  }
    
  return false;
};
  
  
//Checks if the word is in the 2D array horizontally, both forwards and backwards
const horizontalCheck = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  
  for (const l of horizontalJoin) {
    if (l.includes(word) || reverse(l).includes(word)) {
      return true;
    }
  }
  
  return false;
};
  
  
//Checks if the word is in the 2D array vertically, both forwards and backwards
const verticalCheck = (letters, word) => {
  for (let x = 0; x < letters.length - 1; x++) {
    let verticalArrays = [];
  
    for (let y = 0; y < letters.length; y++) {
      verticalArrays.push(letters[y][x]);
    }
    
    const verticalJoin = verticalArrays.join("");
  
    if (verticalJoin.includes(word) || reverse(verticalJoin).includes(word)) {
      return true;
    }
  }
  
  return false;
};
  
  
//Additional function declared outside of both the horizontal and vertical checks.
//This function returns the reverse of the word.
const reverse = (word) => word.split("").reverse().join("");
  
  
//Exports the function to be available to other files
module.exports = wordSearch;