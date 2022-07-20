/**
 * Q1:
 * Convert any sentence into Titlecase
 * 
 * 'have a great day'   ->  'Have A Great Day'
 * 'YOu lIVe ONlY ONcE' ->  'You Live Only Once'
 * 'gooD mORNIng' -> 'Good Morning'
 * 'apple banana cherry' -> 'Apple Banana Cherry'
 * 
 */

 const sentence  = 'have a great day';
 console.log (`sentence -> ${sentence}`);
 let abbr = '';

 const sentenceWords = sentence.toUpperCase().split(' ');

 for ( let i = 0; i <= sentenceWords.length-1; i++) {
    abbr = abbr + sentenceWords[i].substring(0,1);
 }
 console.log (`abbr -> ${abbr}`);





/**
 * Q2:
 * Reverse a String (word by word)
 * 
 * 'have a great day'   ->  'day great a have'
 * 'good morning'   -> 'morning good'
 * 'hello dear how are you doing' -> doing you are how dear hello'
 * 'Learn' -> 'Learn'
 * 
 */


 const word = 'have a great day'
 const word1  = word.split(' ');

 let myWord = word1.reverse();
 console.log(myWord);
 
 for ( let i = 0; i <= word1.length-1; i++) {
    console.log(myWord[i]);
 }


/**
 * Q3:
 * Find the total of numbers in the array
 * 
 * [1, 2, 3, 4, 5] -> 15
 * [1, 1, 1, 2, 3, 1, 2] -> 11
 * [1, -1] -> 0
 */

 
 



/**
 * Q4:
 * Find the average of the given array:
 * 
 * avg = totalOfValues/numberOfValues
 * 
 * [1, 2, 3, 4, 5] -> 15/5 -> 3
 * [1, 1, 1, 2, 3, 1, 2] -> 11/7 -> 1.xx
 * [1, -1] -> 0/2 -> 0
 */