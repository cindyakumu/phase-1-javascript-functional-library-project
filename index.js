// Collection Functions (Arrays or Objects)

function myEach(collection, callback) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < values.length; i++) {
    callback(values[i], i, collection);
    }
    return collection;
    }
    
    function myMap(collection, callback) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    let result = [];
    for (let i = 0; i < values.length; i++) {
    result.push(callback(values[i], i, collection));
    }
    return result;
    }
    
    function myReduce(collection, callback, acc) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    let start = acc !== undefined;
    if (!start) {
    acc = values[0];
    for (let i = 1; i < values.length; i++) {
    acc = callback(acc, values[i], collection);
    }
    } else {
    for (let i = 0; i < values.length; i++) {
    acc = callback(acc, values[i], collection);
    }
    }
    return acc;
    }
    
    function myFind(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < values.length; i++) {
    if (predicate(values[i], i, collection)) {
    return values[i];
    }
    }
    return undefined;
    }
    
    function myFilter(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    let result = [];
    for (let i = 0; i < values.length; i++) {
    if (predicate(values[i], i, collection)) {
    result.push(values[i]);
    }
    }
    return result;
    }
    
    function mySize(collection) {
    const values = Array.isArray(collection) ? collection : Object.keys(collection);
    return values.length;
    }
    
    // Array Functions
    
    function myFirst(array, n) {
    if (n === undefined) {
    return array[0];
    } else {
    return array.slice(0, n);
    }
    }
    
    function myLast(array, n) {
    if (n === undefined) {
    return array[array.length - 1];
    } else {
    return array.slice(-n);
    }
    }
    
    // Object Functions
    
    function myKeys(object) {
    let keys = [];
    for (let key in object) {
    if (object.hasOwnProperty(key)) {
    keys.push(key);
    }
    }
    return keys;
    }
    
    function myValues(object) {
    let values = [];
    for (let key in object) {
    if (object.hasOwnProperty(key)) {
    values.push(object[key]);
    }
    }
    return values;
    }
    
    // Optional Bonus Functions
    
    function mySortBy(array, callback) {
    let sortedArray = [...array];
    return sortedArray.sort((a, b) => {
    let aValue = callback(a);
    let bValue = callback(b);
    if (aValue < bValue) {
    return -1;
    } else if (aValue > bValue) {
    return 1;
    } else {
    return 0;
    }
    });
    }
    
    function myFlatten(array, shallow, newArr = []) {
    if (shallow) {
    return newArr.concat(...array);
    }
    
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            myFlatten(array[i], shallow, newArr);
        } else {
            newArr.push(array[i]);
        }
    }
    return newArr;
    }