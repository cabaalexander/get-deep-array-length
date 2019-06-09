things = {
  "people": ["Juan", "Jose", "Pedro"],
  "cars": {
    "red": {
      "faster": {
        "pretty": [2],
        "ugly": [5, 5, 5, 5, 5, 5, 5]
      },
      "slower": [4, 5, 5]
    },
    "blue": [4, 5, 6, 7]
  }
}

function isObject(obj) {
  return obj && typeof obj === 'object' && obj.constructor === Object
}

const getDeepArrayLength = (json, acc = 0) => {
  const [ key ] = Object.keys(json)
  const value = json[key]

  // make recursion available (by popping off the current key/value)
  delete json[key]

  // base condition
  // this will return the acumulated value on the `acc` variable ;)
  if (!key) {
    return acc
  }

  // flatten current object with current value (only if it is an object)
  const recurse = isObject(value)
    ? {...json, ...value}
    : json

  if (Array.isArray(value)) {
    acc+=value.length
  }

  return getDeepArrayLength(recurse, acc)
}

console.log(getDeepArrayLength(things))
