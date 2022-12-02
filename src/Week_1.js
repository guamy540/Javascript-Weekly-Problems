
/**
 * Create a function that counts how many r's are in a string. 
 * This function must count both cases of the letter r.
 * 
 * Example: problemOne("Hello World") should return 1
 * 
 * @param {string} str - The string to be searched
 * 
 * @returns {number} - The number of r's in the string
*/
function problemOne(sentence){
    if(typeof sentence != "string") throw new TypeError(`Expected ${sentence} to be a string`)
    var count = 0;
    var stringsearch_r = "r"
    
    for(var i=0; i<sentence.length; count+=+(stringsearch_r===sentence[i++].toLowerCase()));

    return count;
}

/**
 * Create a function that takes a number and returns a string formatted with commas seperating thousands.
 * Example: problemTwo(1000000) should return "1,000,000"
 * 
 * @param {number} num - The number to be formatted
 * 
 * @returns {string} - The number formatted with commas
 */

function problemTwo(number){
    if(typeof number != "number") throw new TypeError(`Expected ${number} to be a number`)
    return number.toLocaleString();;
}

/**
 * Create a function that takes two strings as inputs and returns the longest common ending.
 * This should be case insensitive.
 * 
 * Example: problemThree("Hello World", "Goodbye World") should return " World"
 * 
 * @param {string} str1 - The first string to be compared
 * @param {string} str2 - The second string to be compared
 * 
 * @returns {string} - The longest common ending of the two strings
 */
function problemThree(stringOne, stringTwo){
    if (stringOne == "" || stringTwo == "") return ''
    
    if(typeof stringOne != "string") throw new TypeError(`Expected ${stringOne} to be a string`)
    if(typeof stringTwo != "string") throw new TypeError(`Expected ${stringTwo} to be a string`)
    
    let commonEnding = ''

    for(let i = 1; i < stringOne.length+1; i++){
        if (stringOne[stringOne.length-i].toLowerCase() == stringTwo[stringTwo.length-i].toLowerCase()){
            commonEnding = stringOne[stringOne.length-i] + commonEnding
        }else{
            return commonEnding
        }
    }

    return commonEnding;
}

/**
 * Create a function that takes a two digit number and determins if its the largest of two possible digit swaps.
 * 
 * Example: problemFour(27) should return false
 * Example: problemFour(43) should return true
 * 
 * @param {number} num - The number to be checked
 * 
 * @returns {boolean} - True if the number is the largest of two possible digit swaps, false otherwise
 */

function problemFour(twoDigitNumber){
    if(typeof twoDigitNumber != "number") throw new TypeError(`Expected ${twoDigitNumber} to be a number`)
    
    let charArray = twoDigitNumber.toString();

    return charArray[0]>=charArray[1];
}

/**
 * You are at the given coordinate of a grid.
 * Given your coordinates and a cartesian coordinate of your destination,
 * return how many moves it will take to arrive, if you can only move 1 integer in any direction at a time.
 * All coordinates will be integers
 * 
 * Example: problemFive([0,0], [1,1]) should return 2
 * 
 * @param {number[]} start - The starting coordinate
 * @param {number[]} end - The ending coordinate
 * 
 * @returns {number} - The number of moves it will take to arrive at the destination
 * 
 */
function problemFive(start, end){
    if(typeof start != "object") throw new TypeError(`Expected ${start} to be an array`)
    if(typeof end != "object") throw new TypeError(`Expected ${end} to be an array`)

    return Math.abs(start[0] - end[0]) + Math.abs(start[1] - end[1]);
}

module.exports = { problemOne, problemTwo, problemThree, problemFour, problemFive };