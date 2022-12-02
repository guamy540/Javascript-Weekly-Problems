/**
 * Average the values of an grades documents. Return value with only 1 decimal place.
 * 
 * Example: problemOne({CS230: 95, CS250: 89, CS133: 91}) should return 91.7
 * 
 * Values can be numbers or strings. If a value is a string, ignore it.
 * 
 * Numbers will be between 0 and 100. Handle situations where the number is not in this range.
 * 
 * @param {object} obj - The object of class grades.
 * 
 * @returns {number}
 */


 function problemOne(obj){   
    if(typeof obj != "object") throw new TypeError(`Expected ${obj} to be an object`)

    let avg = 0.0;
    let count = 0;
    let sum = 0;
  
    //iterate through object, take the value of each pair, add if between 0 and 100 then increment count
    for (const value of Object.values(obj)){
        if(100 >= value && value >=0 && value !== ''){
          sum = sum+value;
        count++
        }
    }
  
    avg = sum/count;
    avg = Math.round(avg * 10) / 10; //round to the tenth decimal
    if (sum == 0 ) avg = undefined; //check that avg has a value, if not return undefined. Otherwise, it returns 0 instead of undefined
    return avg;
   }
  
   
    /**
    * Convert an object to an array, where the keys are the first element in each subarray, and the values are the second element.
    * 
    * Example (input): {a: 1, b: 2, c: 3}
    * 
    * Example (output): [['a', 1], ['b', 2], ['c', 3]]
    * 
    * @param {object} obj
    * 
    * @returns {array}
    */
     function problemTwo(obj)
     {      
        if(typeof obj != "object") throw new TypeError(`Expected ${obj} to be an object`)
          
        return Object.entries(obj);
  
    }
   //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   /**
    * Check if two objects are equal in keys and values. 
    * This has to handle deeply nested objects.
    * 
    * Example problemThree({a: 1, b: 2}, {a: 1, b: 2}) should return true
    * 
    * @param {object} objOne
    * 
    * @param {object} objTwo
    * 
    * @returns {boolean}
    * 
    */
   function problemThree(objOne, objTwo)
    {
        if(typeof objOne != "object") throw new TypeError(`Expected ${objOne} to be an object`)
        if(typeof objTwo != "object") throw new TypeError(`Expected ${objTwo} to be an object`)

        //used the util.isDeepStrictEqual() method found in the Node.js library
        const util = require('util')
        
        return util.isDeepStrictEqual(objOne, objTwo)
    }
    
  
  module.exports = { problemOne, problemTwo, problemThree};