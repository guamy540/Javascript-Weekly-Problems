/*NOTE: I've changed the names of some functions to reflect what they do instead of
  just having them stay with names like "problemOne" and to avoid having multiple
  functions with the same name. In the test case, they are still described as 'week1, problemOne'
  but the expect() function calls the function by its update name*/


/**
 * Choose any 5 functions from previous weeks and add at least three new unit tests to each function.
 * One should be an error test and the other two should be edge cases.
 * 
 * You will need to submit both the Week_8.js file and the Week_8.test.js file.
 */

 const { AssertionError } = require("chai");


 const isThereAnI = (sentence) =>{
    if (typeof sentence !== String) throw new TypeError(`Expected ${sentence} to be a string`)

    sentence = sentence.toLowerCase()
    
    return (sentence.includes('i') ? true : false);
}


function countLetterR(sentence){
    if (typeof sentence != "string") throw new TypeError(`Expected ${sentence} to be a string`)

    var count = 0;
    var stringsearch_r = "r"
    
    for(var i=0; i<sentence.length; count+=+(stringsearch_r===sentence[i++].toLowerCase()));

    return count;
}

const findSmallestBiggest = (arr) => {
    if (typeof arr != "object") throw new TypeError(`Expected ${arr} to be an array`)

    //initialize newArrimage.png
    let newArr = [];
    //sort the arr from smallest to largest
    arr = arr.sort((a,b) => {
        if (typeof a != "number") throw new TypeError(`Expected ${a} to be a number`)
        if (a < b) return -1
        if (a > b) return 1
        if (a = b) return 0
        return 0
    })
    newArr.push(arr[0])
    newArr.push(arr[arr.length-1])
    return newArr;
}

function convertNumberToString(number){
    if (typeof number != "number") throw new TypeError(`Expected ${number} to be a number`)

    var formattedNumber;
    
    formattedNumber = number.toLocaleString();
    
    return formattedNumber;
}

function findCommonElements(arr1, arr2)
{
    if(typeof arr1 != "object") throw new TypeError(`Expected ${arr1} to be an array`)
    if(typeof arr2 != "object") throw new TypeError(`Expected ${arr2} to be an array`)

    var commonElements = [];

    //create a hashmap for arr1
    var m = new Map()
    for (let i = 0; i<=arr1.length; i++){
        m.set(arr1[i], arr1[i])
    }

    /*check to see if element in second array can be found in the map
      add if found push to commonElements*/
    for (let i = 0; i<=arr2.length-1; i++){
        if (m.has(arr2[i]))
            commonElements.push(arr2[i])
    }

    return commonElements;
}

module.exports = { isThereAnI, countLetterR, findSmallestBiggest, convertNumberToString, findCommonElements};
