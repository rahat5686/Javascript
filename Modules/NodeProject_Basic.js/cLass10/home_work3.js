/**
 * Q1:
 * Print the length of the country name (without using String-length property)
 *
 *  
 */
 let countryName = 'USA USA'; 

const countryName_split_nothing = countryName.split('');
console.log(`split by "" -> ${countryName_split_nothing}`);
countryName_split_nothing.length
console.log(countryName_split_nothing.length);

 /**
  * 
  * Count the number of words in the sentence
  */
 //const sentence = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL." ;
 let sentence = 'HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.'
  const sentence_split_space = sentence.split(` `);
 console.log(`split by space -> ${sentence_split_space}`);
sentence_split_space.length
console.log(sentence_split_space.length -1);

 /**
  * Q3:
  * Convert any 4-word sentence into Titlecase
  * 
  * 
  * 'have a great day'   ->  'Have A Great Day'
  * 'YOu lIVe ONlY ONcE' ->  'You Live Only Once'
  * 
  */
 
let stmt1 = 'have a great day'
// pull H, A, G, D from string using .substring
// make these letters uppercase by using .toUppercase
// pull all other letters from string .substring
// put string back together using .concat

let firstLetterUppercase1 = stmt1.substring(0, 1).toUpperCase()
let firstLetterUppercase2 = stmt1.substring(5, 6).toUpperCase()
let firstLetterUppercase3 = stmt1.substring(7, 8).toUpperCase()
let firstLetterUppercase4 = stmt1.substring(13, 14).toUpperCase()
console.log(`${firstLetterUppercase1}, ${firstLetterUppercase2}, ${firstLetterUppercase3}, ${firstLetterUppercase4}`);
// next you need to pull .substring 'ave', 'reat', 'ay'
// connect with .concat back all of the pulled values so your sentence should look like 'Have A Great Day'

let allOtherLetters1 = stmt1.substring(1, 4); 
let redefinedWord1 = firstLetterUppercase1.concat(allOtherLetters1); 
console.log(`${redefinedWord1}`);

let allOtherLetters2 = stmt1.substring(4,5);
let redefinedWord2 = firstLetterUppercase2.concat(allOtherLetters2);
console.log(`${redefinedWord2}`);
 
let allOtherLetters3 = stmt1.substring(8,12);
let redefinedWord3 = firstLetterUppercase3.concat(allOtherLetters3);
console.log(`${redefinedWord3}`);

let allOtherLetters4 = stmt1.substring(14,16);
let redefineWord4 = firstLetterUppercase4.concat(allOtherLetters4);
console.log(`${redefineWord4}`);

 /**
  * Q4:
  * Create abbreviation for any 4-word sentence
  * 
  * 'have a great day'   ->  'HAGD'
  * 'YOu lIVe ONlY ONcE' ->  'YLOO'
  * 'yOu neVER WaLK alOne'   ->  'YNWA'
  * 
  */
  let word = 'have a great day'
  
  const word_split_space = word.split(' ');
  console.log(`\nsplit by " " -> ${word_split_space}`);
  
  // pull H, A, G, D from string using .substring
  // make these letters uppercase by using .toUppercase
  
  let firstLetterUppercase5 = word.substring(0, 1).toUpperCase();
  let firstLetterUppercase6 = word.substring(5, 6).toUpperCase();
  let firstLetterUppercase7 = stmt1.substring(7, 8).toUpperCase()
  let firstLetterUppercase8 = stmt1.substring(13, 14).toUpperCase()

  console.log(`${firstLetterUppercase5}${firstLetterUppercase6}${firstLetterUppercase7}${firstLetterUppercase8}`);