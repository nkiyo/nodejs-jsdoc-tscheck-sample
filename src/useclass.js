const MyClass = require('./myclass.js')

const mc = new MyClass(1, 2, 'hoge')

/** @type {string} ローカル変数にも型付けが可能 */
const mcs = mc.getS()
