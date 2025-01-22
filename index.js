const getValues = (collection) => Array.isArray(collection) ? collection : Object.values(collection);

// myEach
function myEach(collection, callback) {
  const values = getValues(collection);
  for (let value of values) {
    callback(value);
  }
  return collection;
}

// myMap
function myMap(collection, callback) {
  const values = getValues(collection);
  let result = [];
  for (let value of values) {
    result.push(callback(value));
  }
  return result;
}

// myReduce
function myReduce(collection, callback, acc) {
  const values = getValues(collection);
  let startIndex = 0;

  if (acc === undefined) {
    acc = values[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < values.length; i++) {
    acc = callback(acc, values[i], collection);
  }

  return acc;
}

// myFind
function myFind(collection, predicate) {
  const values = getValues(collection);
  for (let value of values) {
    if (predicate(value)) {
      return value;
    }
  }
  return undefined;
}

// myFilter
function myFilter(collection, predicate) {
  const values = getValues(collection);
  let result = [];
  for (let value of values) {
    if (predicate(value)) {
      result.push(value);
    }
  }
  return result;
}

// mySize
function mySize(collection) {
  return getValues(collection).length;
}

// myFirst
function myFirst(array, n = 1) {
  return n === 1 ? array[0] : array.slice(0, n);
}

// myLast
function myLast(array, n = 1) {
  return n === 1 ? array[array.length - 1] : array.slice(-n);
}

// myKeys
function myKeys(object) {
  return Object.keys(object);
}

// myValues
function myValues(object) {
  return Object.values(object);
}

// Export all functions
module.exports = {
  myEach,
  myMap,
  myReduce,
  myFind,
  myFilter,
  mySize,
  myFirst,
  myLast,
  myKeys,
  myValues
};

console.log(myValues({ one: 1, two: 2, three: 3 })); 
