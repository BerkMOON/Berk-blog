const debounce = (fn, delay) => {
  let timer
  return function (...args) {
    let context = this
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(context, args)
    })
  }
}

const throttle = (fn, time) => { 
  let flag = true
  return function (...args) { 
    let context = this
    if (!flag) return 
    flag = false
    setTimeout(() => {
      fn.apply(context, args)
      flag = true
    }, time)
  }
}