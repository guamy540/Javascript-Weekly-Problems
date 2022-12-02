
/**
 * Find the smallest and biggest numbers in an array
 * 
 * Example: problemOne([1, 2, 3, 4, 5]) should return [1, 5]
 * 
 * @param {number[]} arr - The array to search
 * 
 * @returns {number[]} - An array containing the smallest and biggest numbers in the array
 */

function compareNumbers(a,b){ 
    return a-b
}

 function problemOne(arr)
 {   
    if(typeof arr != "object") throw new TypeError(`Expected ${arr} to be an array`)
    arr.sort(compareNumbers)
    return [arr[0], arr[arr.length-1]];
 }
 
 /**
  * Create a function that takes two numbers and returns the array of multiples of the first number until the array's last value reaches the second number.
  * If the second number is a multiple of the first number, it should be included in the array.
  * 
  * Example: problemTwo(7, 100) should return [7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98]
  * 
  * @param {number} num1 - The number to be multiplied
  * 
  * @param {number} num2 - The number to be reached
  * 
  * @returns {number[]} - The array of multiples
  * 
  */
 function problemTwo(startingNumber, endingNumber)
 {
    if(typeof startingNumber != "number") throw new TypeError(`Expected ${startingNumber} to be a number`)
    if(typeof endingNumber != "number") throw new TypeError(`Expected ${endingNumber} to be a number`)
    
    if(startingNumber > endingNumber || startingNumber < 1) throw new Error('Impossible numbers.')

     let multiplesArray = [];
     let product = startingNumber
     for(let i = 1; product <= endingNumber; product=startingNumber*++i){
         multiplesArray.push(product);
     }
     return multiplesArray;
 }
 
 /**
  * Create a function that finds all common elements between two arrays.
  * 
  * Example: problemThree([1, 2, 3, 4, 5], [2, 4, 6, 8, 10]) should return [2, 4]
  * 
  * @param {number[]} arr1 - The first array to be compared
  * 
  * @param {number[]} arr2 - The second array to be compared
  * 
  * @returns {number[]} - The array of common elements
  *
  */
 function problemThree(arr1, arr2)
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
    add if found push to commonElements*/image.png
    for (let i = 0; i<=arr2.length-1; i++){
        if (m.has(arr2[i]))
            commonElements.push(arr2[i])
    }

    return commonElements;
 }
 
 
 /**
  * Create a function that takes a nested array and counts the total number of items in all the arrays.
  * 
  * Example: problemFour([1, [2, 3], [4, [5, 6]], [7, 8, 9]]) should return 9
  * 
  * @param {number[]} arr - The array to be counted
  * 
  * @returns {number} - The total number of items in the array
  */
 
 function problemFour(arr)
 {
    if(typeof arr != "object") throw new TypeError(`Expected ${arr} to be an array`)

     arr = arr.flat(Infinity); 
     return arr.length;
 }
 
 module.exports = { problemOne, problemTwo, problemThree, problemFour };