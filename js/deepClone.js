/**
 * deep clone
 */
const isObject = (obj) => (typeof obj === 'object' || typeof obj === 'function') && obj !== null

/** 
 * 普通递归
*/
const deepClone1 = (target) => {
  if (isObject(target)) {
    const tempTarge = Array.isArray(target) ? [] : {}
    for (let temp in target) {
      if (target.hasOwnProperty(temp)) {
        tempTarge[temp] = deepClone(target[temp])
      }
    }
    return tempTarge
  } else {
    return target
  }
}

/**
 * 循环引用
 * let obj = {val : 100};
 * obj.target = obj;
 * deepClone(obj);
 * 会报错
 */

const deepClone = (target, map = new WeakMap()) => {
  if (map.has(target)) return target;
  if (isObject(target)) {
    map.set(target, true)
    const tempTarge = Array.isArray(target) ? [] : {}
    for (let temp in target) {
      if (target.hasOwnProperty(temp)) {
        tempTarge[temp] = deepClone(target[temp], map)
      }
    }
    return tempTarge
  } else {
    return target
  }
}

const test = {
  a: 1,
  b: 'string',
  c: {
    x: 'string',
    y: {
      ge: '1'
    }
  }
}

console.log(deepClone(test))