const MyClass = require('./myclass.js')

/** @type {MyClass} */
const mc = new MyClass(1, 2, 'hoge')

/** @type {string} ローカル変数にも型付けが可能 */
const mcs = mc.getS()

/** @type {{
 * x: number,
 * y: number,
 * s: string ,
 * n: number}} 型定義の途中で改行OK*/
const obj = mc.getJSON(123)
console.log(`${JSON.stringify(obj)}`)