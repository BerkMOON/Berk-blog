const Pending = 'pending';
const Fulfilled = 'fulfilled';
const Failed = 'failed';

function MyPromise(executor) {
  let self = this;
  self.value = null;
  self.error = null;
  self.status = Pending;
  self.onFulfilledCallbacks = [];
  self.onRejectedCallbacks = [];

  const resolve = (value) => {
    if (self.status !== Pending) return;
    setTimeout(() => {
      self.value = value;
      self.status = Fulfilled
      self.onFulfilledCallbacks.forEach(callback => {
        callback(self.value);
      })
    })
  }

  const reject = (reason) => { 
    if (self.status !== Failed) return;
    setTimeout(() => {
      self.error = reason;
      self.status = Failed
      self.onRejectedCallbacks.forEach(callback => {
        callback(self.error)
      })
    })
  }

  executor(resolve, reject)
}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
  let returnPromise
  let self = this
  if (self.status === Pending) {
    return returnPromise = new MyPromise((resolve, reject) => {
      self.onFulfilledCallbacks.push((value) => {
        try {
          let x = onFulfilled(value)
          resolve(x)
        } catch (e) {
          reject(e)
        }
      })
      self.onRejectedCallbacks.push((value) => {
        try {
          let x = onFulfilled(value)
          resolve(x)
        } catch (e) {
          reject(e)
        }
      })
    })
  } else if(this.status === Fulfilled) {
    onFulfilled(this.value)
  } else {
    onRejected(this.error)
  }
  return this
}

MyPromise.prototype.catch = function(reason) {
  return new Promise((resolve, reject) => { 
    reject(reason)
  })
}

MyPromise.prototype.all = function (promises) {
  return new Promise((resolve, reject) => {
    let result = []
    let index = 0
    let len = promises.length
    if (len === 0) { 
      resolve(result)
      return 
    }
    for (let i = 0; i < len; i++) { 
      Promise.resolve(promises[i]).then(data => {
        result[i] = data
        index++ 
        if (index === len) resolve(result)
      }).catch(reason => {
        reject(reason)
      })
    }
  })
}

MyPromise.prototype.race = function (promises) {
  return new Promise((resolve, reject) => {
    let result = []
    let index = 0
    let len = promises.length
    if (len === 0) { 
      resolve(result)
      return 
    }
    for (let i = 0; i < len; i++) { 
      Promise.resolve(promises[i]).then(data => {
        resolve(data)
        return
      }).catch(reason => {
        reject(reason)
      })
    }
  })
}
