/**
 * 如何实现继承
 */

function Parent1() {
  this.name = 'test'
  this.catgory = ['1', '2', '3', '4']
}

/**
 * 构造函数继承
 * 属性全在实例对象里
 * 问题：
 * 方法不能继承
 */


function Child1() {
  Parent1.call(this)
  this.type = 'child1'
}

Parent1.prototype.getName = function () { 
  // console.log(this.type)
}

/**
 * 原型链继承
 * 属性全在__proto__里，全在原型对象上，而不在实例本身里
 * 问题：
 * 多个实例对引用类型的操作会改变所有实例的数据
 */

function Child2() { 
  this.type = 'child2'
}

Child2.prototype = new Parent1()

// console.log(new Child2().getName())

/**
 * 组合式继承
 * 实例本身及__proto__里有都有name 和 catgroy属性，但是读取时先读取了实例本身的
 */
function Child3() {
  Parent1.call(this)
  this.type = 'child3'
}

Child3.prototype = new Parent1()
Child3.prototype.constructor = Child3

var instance1 = new Child3()
instance1.catgory.push(100)
console.log(instance1.__proto__, instance1)


/**
 * 寄生组合式继承
 */
function Child4() {
  Parent.call(this)
  this.type = 'child4'
}

Child4.prototype = Object.create(Parent1.prototype)
Child4.prototype.constructor = Child4
