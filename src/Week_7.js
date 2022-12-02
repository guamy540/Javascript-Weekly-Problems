//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

const { AssertionError } = require("chai");


/**
 * Problem One
 * There is no 'I' in 'team'.
 * Create a function that if there is no 'i' in a word.
 * The function expects a string and will return a boolean.
 * This should be case insensitive both 'i' and 'I' 
 * should return true.
 * 
 * If anything other than a string is passed, throw a TypeError. 
 * The message should match the expected error in the test.
 * Expected 'sentence' to be a string
 * 
 * @param {string} str - The string to be searched
 * 
 * @returns {boolean} - Whether or not the string contains an 'i'
 */
 const isThereAnI = (sentence) =>{
    if (typeof sentence !== String) throw new TypeError(`Expected ${sentence} to be a string`)

    return (sentence.toLowerCase().includes('i') ? true : false);
}

/**
 * Create a function that uses isThereAnI to 
 * return a cheeky message to the user about whether or not
 * the phrase they entered contains an 'i'.
 * 
 * Use a try...catch block to handle the type error in isThereAnI.
 * 
 * If a Type Error:
 * Should return the error message.
 * 
 * If any other error:
 * The catch block should console.error the error and 
 * return a string that tells the user:
 * 'Something went wrong'
 * 
 * 
 * @param {string} str - The string input from the user
 * 
 * @param {string} message = The string to be returned to the user
 */
const motivationalMessageAboutTeamWork = (sentence) => {
    try{
        return isThereAnI(sentence)
    }catch(e)
    {
        return e.message;
    }
}

/**
 * 
 * Average the values of an grades documents.
 * 
 * Example: problemTwo({CS230: 95, CS250: 89, CS133: 91}) should return 91.7
 * 
 * Function should throw a RangeError is a value is not between 0 and 100.
 * Message should state Expected 'key': 'value" to be between 0 and 100
 * 
 * Function should throw a TypeError if a value is not a number.
 * Message should state Expected 'key': 'value' to be a number
 * 
 * 
 * 
 */
const averageGrades = (obj) => {
     for ([key, value] of Object.entries(obj)){
        if(typeof value != "number") throw new TypeError(`Expected ${key}: ${value} to be a number`)
        if(value < 0 || value > 100) throw new RangeError(`Expected ${key}: ${value} to be between 0 and 100`)
     }

    let arrValues = Object.values(obj);
    let sum = arrValues.reduce((reduceSum, x) => reduceSum + x, 0)
    let avg = parseFloat((sum/arrValues.length).toFixed(1));
    return (Number.isNaN(avg) ? undefined : avg);
}

/**
 * Create a function that takes a databaseLookup function and returns a 'report card'.
 * The databaseLookup will return a grade object similar to what is needed in averageGrades.
 * For now the only thing you have to return is an average of the grades.
 * 
 * The function should have a try...catch block that handles the errors thrown by averageGrades.
 * It should return a string that tells the user what went wrong.
 * All other errors should be handled by a generic error handler.
 */
const gradeReport = (dataLookup) => {
    try{
        let obj = dataLookup();
        for ([key, value] of Object.entries(obj)){
            if(typeof value != "number") throw new TypeError(`Expected ${key}: ${value} to be a number`)
            if(value < 0 || value > 100) throw new RangeError(`Expected ${key}: ${value} to be between 0 and 100`)
         }
         
        let arrValues = Object.values(obj);
        let sum = arrValues.reduce((reduceSum, x) => reduceSum + x, 0)
        let avg = parseFloat((sum/arrValues.length).toFixed(1));
        return (Number.isNaN(avg) ? undefined : avg);
    }
    catch(e){
        if (e.name == "AssertionError") e.message = 'Something went wrong'
        return e.message
    }
}


module.exports = { isThereAnI, motivationalMessageAboutTeamWork, averageGrades, gradeReport};