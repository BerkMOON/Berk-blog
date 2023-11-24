/**
 * 实现一个event emitter
 * addListener
 * removeListener
 * once
 * removeAllListener
 * emit
 * @param { type } 类型
 */

function EventEmitter() {
  this.event = new Map()
}

const callbacks = (fn, once) => ({callback: fn, once})

EventEmitter.prototype.addListener = function (type, fn, once = false) {
  let handler = this.event.get(type)
  if (!handler) { 
    this.event.set(type, callbacks(fn))
  } else if(hander && typeof handler.callback === 'function') {
    this.event.set(type, [handler, callbacks(fn, once)])
  } else {
    handler.push(callbacks(fn, once))
  }
}

EventEmitter.prototype.removeListener = function (type, listener) { 
  const handler = this.event.get(type)
  if (!handler) return 
  if (!Array.isArray(handler)) {
    if (handler.callback === listener) {
      this.event.delete(type)
    }
    return 
  } else {
    for (let i = 0; i < handler.length; i++) { 
      let item = handler[i]
      if (item.callback === listener) { 
        handler.splice(i, 1)
        i--
        if (handler.length === 1) {
          this.event.set(type, handler[0])
        }
      }
    }
  }
}

EventEmitter.prototype.once = function (type, fn) {
  this.addListener(type, fn, true)
}

EventEmitter.prototype.emit = function (type, ...args) {
  const handler = this.event.get(type)
  if (!handler) return 
  if (Array.isArray(handler)) {
    handler.map(item => {
      item.callback.apply(this, args)
      if (item.once) this.removeListener(type, item)
    })
  } else {
    handler.callback.apply(this, args)
  }
  return true
}

EventEmitter.prototype.removeAllListener = function (type) {
  let hander = this.event.get(type)
  if (!hander) return
  this.event.delete(type)
}