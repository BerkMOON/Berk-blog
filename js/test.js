const isObject = (target) => {
  return  (typeof target === 'object' || typeof target === 'function')
}

const deepClone = (target, map = new WeakMap()) => {
  const result = Array.isArray(target) ? [] : {}
  if (!isObject(target)) {
    return target
  } else {
    if (map.has(target)) return target
    for (let key in target) { 
      map.set(target, true)
      if (target.hasOwnProperty(key)) { 
        result[key] = deepClone(target[key], map)
      }
    }
  }
  return result
}
