/**
 * 实现instanceof
 */
const ownInstanceof = (a, b) => {
  if (typeof a !== 'object' || a === null) return false
  let proto = Object.getPrototypeOf(a)
  while (true) {
    if (proto === null) return false
    if (proto === b.prototype) return true
    proto = Object.getPrototypeOf(proto)
  }
}