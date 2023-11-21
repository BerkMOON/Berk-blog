/**
 * 自己写一个new
 */
const newObject = function (func, ...args) {
  const obj = {}
  obj.__proto__ = func.protoType
  const result = func.call(obj, ...args)
  return result instanceof Object ? result : obj 
}