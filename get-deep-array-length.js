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

const getDeepArrayLength = (json, holder = 0) => {
  const [ key ] = Object.keys(json)
  const value = json[key]

  // make recursion available
  delete json[key]

  // base condition
  if (!key) {
    console.log(`\nnot key : returning`)
    return 0
  }

  console.log(`${key}\n\t${Array.isArray(value)
    ? 'array'
    : 'obj'}`)

  // flatten current object with current value (only if it is an object)
  const recurse = isObject(value)
    ? {...json, ...value}
    : json

  if (Array.isArray(value)) {
    console.log(`\t${value}`)
  }

  console.log(`\tholder: ${holder}`)

  return getDeepArrayLength(recurse, holder + 1)
}

console.log(getDeepArrayLength(things))
