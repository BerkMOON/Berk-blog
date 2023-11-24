const a = [1, 2, 3,[4, 5], [6, [7, 8]], [9, [10, 11, [12, 13]]]]

let result = []
const flatten = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatten(arr[i]);
    } else {
      result.push(arr[i])
    }
  }
  return result
}

console.log(flatten(a))