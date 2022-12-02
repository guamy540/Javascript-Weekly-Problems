/**
 * Find the smallest and biggest numbers in an array
 * Example: problemOne([1, 2, 3, 4, 5]) should return [1, 5]
 * 
 * You must use Array operators like .forEach, .map, .filter, .reduce, etc.
 * 
 * @param {number[]} arr - The array to search
 * 
 * @returns {number[]} - An array containing the smallest and biggest numbers in the array
 */
function compareFunction(a,b){
    return a - b;
}

 const problemOne = (arr) => {
    if(typeof arr != "object") throw new TypeError(`Expected ${arr} to be an array`)
    arr = arr.sort(compareFunction)
    
    return [arr[0], arr[arr.length-1]];
}

/**
* Average the values of an grades documents. Return value with only 1 decimal place.
* Values can be numbers or strings. If a value is a string, ignore it.
* Numbers will be between 0 and 100. Handle situations where the number is not in this range.
* 
* Example: problemTwo({CS230: 95, CS250: 89, CS133: 91}) should return 91.7
* 
* You must use Array operators like .forEach, .map, .filter, .reduce, etc.
* 
* @param {object} obj - The object of class grades.
* 
* @returns {number}
*/


const problemTwo = (obj) => {
    if(typeof obj != "object") throw new TypeError(`Expected ${obj} to be an object`)
    //convert obj values into an array
    let arrValues = Object.values(obj);
    //filter the array for items between 0 and 100
    arrValues = arrValues.filter(function(item){
        return (item > 0 && item < 100)
    })
    //find the sum of all the values left in the array after filtering
    let sum = arrValues.reduce((reduceSum, x) => reduceSum + x, 0)
    //find the avg and round to the first decimal
    let avg = parseFloat((sum/arrValues.length).toFixed(1));
    //return undefinted if avg is not a number, otherwise return average
    return (Number.isNaN(avg) ? undefined : avg);
}

/**
 * Create a function that takes an array of numbers and return the three lowest positive numbers in order.
 * 
 * Example: problemThree([-1, 2, 3, 5, 4]) should return [2, 3, 4]
 * 
 * @param {number[]} arr - The array to search
 * 
 * @returns {number[]} - An array containing the three lowest positive numbers in the array
 * 
 * You must use Array operators like .forEach, .map, .filter, .reduce, etc.
 */
const problemThree = (arr) => {
    if(typeof arr != "object") throw new TypeError(`Expected ${arr} to be an array`)
   
    let lowest = [];
    lowest = arr.sort(compareFunction) //this function is found around problemOne
    lowest = arr.filter(function(item){
        return item > 0             
    })
    
    if (lowest.length > 3){
        lowest.length = 3;
    }

    return lowest;
}

/**
 * Create a function that takes an array of strings and 
 * categorizes them as "short" or "long" based on the length of the string.
 * Strings with 10 or more characters are considered long.
 * 
 * You must use Array operators like .forEach, .map, .filter, .reduce, etc.
 * 
 * @param {string[]} arr - The array of strings to categorize
 * 
 * @returns {obj} - An object with two properties, short and long, that contain arrays of strings
 */

const problemFour = (arr) => {
    if(typeof arr != "object") throw new TypeError(`Expected ${arr} to be an array`)
   
    let obj ={
        short:[],
        long: []
    }

    arr.forEach((item => {
        if (item.length < 10)
            obj.short.push(item)
        else
            obj.long.push(item)
    }))

    return obj;
}

module.exports = { problemOne, problemTwo, problemThree, problemFour };