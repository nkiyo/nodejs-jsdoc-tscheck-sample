const MyClass = require('./myclass.js')

/** @type {MyClass} */
const mc = new MyClass(1, 2, 'hoge')

/** @type {string} ローカル変数にも型付けが可能 */
const mcs = mc.getS()

/** @type {{
 * x: number,
 * y: number,
 * s: string,
 * n: number,
 * n2: number}
 * | null}
 * 型定義の途中で改行OK, union types も OK
 * ただし、関数の戻り値の型と合ってなくても警告なし...設定の問題か？ */
const obj = mc.getJSON(123)
console.log(`${JSON.stringify(obj)}`)

/** @type {(x: number) => void} 関数*/
const varfunc = (x) => { console.log(`### ${x}`)}
//varfunc('hoge')
varfunc(1234)