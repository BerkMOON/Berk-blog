Function.prototype.call = function (context, ...args) {
  let context = context || window;
  context.fn = this;

  let result = eval('context.fn(...args)');

  delete context.fn
  return result;
}

Function.prototype.apply = function (context, args) {
  let context = context || window;
  context.fn = this;
  let result = eval('context.fn(...args)');

  delete context.fn
  return result;
}

Function.prototype.bind = function (context, ...args) {
  if (typeof this !== "function") {
    throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
  }

  var self = this;

  var fbound = function () {
      self.apply(this instanceof self ? 
          this : 
          context, args.concat(Array.prototype.slice.call(arguments)));
  }

  fbound.prototype = Object.create(self.prototype);

  return fbound;
}