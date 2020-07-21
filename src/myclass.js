class MyClass {
    /**
     * hogehoge
     * @param {number} x 
     * @param {number} y 
     * @param {string} s 
     */
    constructor(x, y, s) {
        this._x = x
        this._y = y
        this._s = s
    }

    /**
     * hogehoge
     * @return {number}
     */
    getX() {
        return this._x;
    }
    
    /**
     * hogehoge
     * @return {number}
     */
    getY() {
        return this._y;
    }

    /**
     * hogehoge
     * @return {string}
     */
    getS() {
        return this._s;
    }
}

module.exports = MyClass