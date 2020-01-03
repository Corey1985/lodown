'use strict';


/**
 * identity: Returns the given value unaltered.
 * 
 * @param {Any value} value: Can be any datatype.
 * 
 * @return {Any Value}: Same value as input unaltered.
 * 
 */
function identity(value) {
    return value;
}
module.exports.identity = identity;

/**
 * typeOf: Returns the datatype of the given value as a string.
 * 
 * @param {Any Value} value: Accepts array, object, string, number, undefined, null, or a function.
 * 
 * @return {String}: A string of the values datatype.
 */
function typeOf(value){
    if(value === null){
        return "null";
    }
    else if(value === undefined){
        return "undefined";
    }
    else if(Array.isArray(value)){
        return "array";
    }
    else {
        return typeof(value);
    }
    
}
module.exports.typeOf = typeOf;

/** 
 * first: If <number> is not given the first value in <array> is returned. If <array> is not given (or is not an array datatype) an 
 *      empty array literal is returned. If <number> & <array> are passed the first element in <array> that matches <number> is returned.
 * 
 * @param {Array}: An array datatype.
 * 
 * @param {Number}: A number datatype.
 * 
 * return {Number}: Intended to return the first element in <array> that matches <number.
 */

function first(array, number){
    let empty = [];
        if(!Array.isArray(array)){
            return empty;
        }
        else if(typeof(number) !== "number" || number === undefined || number === null){
            return array[0];
        }
        else if(number < 0){
            return empty;
        }
        else if(number > array.length){
            return array;
        }
        else{
    for(let i = 0; i < number; i++){
        empty.push(array[i]);
        }
        return empty;    
        
    }
}
module.exports.first = first;

/** 
 * last: If <number> is not given the last value in <array> is returned. If <array> is not given (or is not an array datatype) an 
 *      empty array literal is returned. If <number> & <array> are passed the first element in <array> that matches <number> is returned.
 * 
 * @param {Array}: an array datatype.
 * 
 * @param {Number}: A number datatype.
 *
 * return {Number}: Intended to return the last number in <array> that matches number.
 * 
 */

function last(array, number){
    let empty = [];
        if(!Array.isArray(array)){
            return empty;
        }
        else if(typeof(number) !== "number" || !number || number === undefined || number === null){
            return array[array.length - 1];
        }
        else if(number < 0){
            return empty;
        }
        else if(number > array.length){
            return array;
        }
        else if(number > -1){
        return array.slice(number - 1, array.length);
        }
}
module.exports.last = last;

/** 
 * indexOf: Returns the index of <value> if found in <array>. Negative one (-1) is returned otherwise
 * 
 * @param {Array}: An array datatype.
 * 
 * @param {Number}: A number datatype.
 * 
 * return {Number}: Returns the index of <value> if it is found in <array>. If not found -1 is returned.
 */

function indexOf(array, value){
  for(let i = 0; i < array.length; i++){
      if(array[i] === value){
          return i;
        }
      }  
          return -1;
}
module.exports.indexOf = indexOf;

/** 
 * contains: Returns a boolean of true if <array> has <value> in it. 
 * 
 * @param {Array}: An array datatype.
 * 
 * @param {Any value}: Any datatype.
 * 
 * return{boolean}: returns a boolean of true or false. True if <value> is inside <array>.
 */

function contains(array, value){
    return array.includes(value) ?  true : false;
}
module.exports.contains = contains;

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 *       action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * 
 * @param {Function} action: The Function to be applied to each value in the collection
 * 
 * @return {nothing}: Nothing is returned. It just itereates through all elements passed to it.
 */
 
function each(collection, func){
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            func(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            func(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * unique: Designed to give an array back with all duplicate elements removed.
 * 
 * @param{Array}: an array datatype.
 * 
 * return{Array}: Returns an array with all later duplicate values removed.
 */
 
function unique(array){
    let uniqueArr = [];
     for(let i = 0; i < array.length; i++){ 
    if (indexOf(array, array[i]) === i){
      uniqueArr.push(array[indexOf(array, array[i])]); 
      } 
  }
  return uniqueArr;
}
module.exports.unique = unique;

/** 
 * filter: Returns a new array for which a function returns true.
 * 
 * @param{Array}: Array datatype.
 * 
 * @param{Func}: A function
 * 
 * return{Array}: An array of truthy values
 */

function filter(array, func){
  let truthy = [];
 each(array,function(value,index,array){
        if(func(value,index,array) === true){
            truthy.push(value);
        }
    });
        return truthy;
}
module.exports.filter = filter;

/** 
 * reject:Returns a new array for which a function returns false.
 * 
 * @param{Array}: Array datatype.
 * 
 * @param{Func}: A function
 * 
 * return{Array}: An array of falsy values
 */

function reject(array, func){
  var falsy = [];
     filter(array, function(value,index,array){
          if(func(value,index,array) === false){
              falsy.push(value);
          }
      });
    return falsy;
}
module.exports.reject = reject;


/** 
 * partition: Creates an array of arrays. The 2 arrays inside of the main array contain truthy & falsy values respectively.
 * 
 * @param{Array}: Array datatype.
 * 
 * @param{Func}: A function
 * 
 * return{Array}: An array of arrays containing truthy and falsy values seperated in 2 arrays.
 */
 
function partition(array, func){
    var wholeArr = [];
    var truthy = [];
    var falsy = [];
      filter(array, function(value,index,array){
          if(func(value,index,array) !== true){
              falsy.push(value);
          }
          else{
              truthy.push(value);
          }
          
      });
    wholeArr.push(truthy, falsy);
    return wholeArr;
}
module.exports.partition = partition;

/** 
 * map: Iterates through An array or object and returns a new array of values altered by a function.
 * 
 * @param{collection}: Either an array or object datatype
 * 
 * @param{func}: A function that iterates.
 * 
 * return: Returns a new array of altered values based on the function passed to parameters.
 */

function map(collection, func){
    let newArr = [];
     each(collection, function(element, index, collection){
         newArr.push(func(element, index, collection));
     });
    return newArr;
}
module.exports.map = map;

/** 
 * pluck: Takes an array containing objects and puts only the object's values into a new array.
 * 
 * @param{array}: array datatype.
 * 
 * @param{value}: Any datatype.
 * 
 * return: An array containing the values from objects.
 */
 
function pluck(array, value){
    return map(array, function(element, index, collection){
        return element[value];
    });
}
module.exports.pluck = pluck;

/** 
 * every: Returns a boolean true if every element in <collection> is determined to be true by <func>.
 * 
 * @param{Collection}: An object or array.
 * 
 * @param{func}: A function.
 * 
 * return: Returns true if every element in <collection> evaluates to true based on <func>. False is returned even one element is false.
 */ 
 
function every(collection, func){
    let result = true;
    if(func === undefined){
  each(collection, (element) => {
      if(!element){
          result = false;
      }
  });
} else {
  each(collection, (element, index, collection) => {
      if(!func(element, index, collection)){
          result = false;
      }
  });
}
  return result;
}
module.exports.every = every;

/** 
 * every: Returns a boolean true if even one element in <collection> is determined to be true by <func>.
 * 
 * @param{Collection}: An object or array.
 * 
 * @param{func}: A function.
 * 
 * return: Returns true if any element in <collection> that evaluates to true based on <func>. False is returned if all elements are false.
 */ 
 
function some(collection, func){
    let result = false;
    if(func === undefined){
  each(collection, (element) => {
      if(element){
          result = true;
      }
  });
} else {
  each(collection, (element, index, collection) => {
      if(func(element, index, collection)){
          result = true;
      }
  });
}
  return result;
}
module.exports.some = some;
 
/**
 * reduce: Combines the values in an array to one value
 * 
 * @param{array}: Array to be combined.
 * 
 * @param{func}: Function that combines values
 * 
 * @param{seed}: Accumulator that holds all the values. Default is 0.
 * 
 * return:
 */
 
function reduce(array, func, seed){
    let startValue = seed === undefined ? 1 : seed;
    for(let i = 0; i < array.length; i++){
         startValue = func(startValue, array[i], i, array);
    }
    return startValue;
}
module.exports.reduce = reduce;

/**
 * extend: intended to combine objects with their key value pairs into one object
 * 
 * @param{obj1}: one object with one set of key valye pairs
 * 
 * @param{...objects}: one or more objects
 * 
 * return: all objects as one object with all given key value pairs
 * 
 */
 
function extend(obj1, ...objects){
    for (let i = 0; i < objects.length; i++){
        for(let key in objects[i]){
            obj1[key] = objects[i][key];
        }
    }
    return obj1;
}
module.exports.extend = extend;
