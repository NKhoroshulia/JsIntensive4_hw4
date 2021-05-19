function concatStrings(string, separator) {
    let array = [];
    let newString;
    array.push(string);

    return function concat(string) {
        if (typeof string === "string") {
            array.push(string);
            return concat;
        } else if (string === '') {
            array.push(string);
            return concat;
        } else if (typeof string !== "string") {
            return newString = array.join(separator || '');
        }
    }
}

class Calculator {
    constructor(x, y) {
        if (!x || typeof x !== 'number' || x === Infinity || x === -Infinity || isNaN(x) ||
            !y || typeof y !== 'number' || y === Infinity || y === -Infinity || isNaN(y)) {
                throw new Error('Переданное значение не число');
        } else {
            this.x = x;
            this.y = y;
        }

        this.setX = this.setX.bind(this);
        this.setY = this.setY.bind(this);
        this.logSum = this.logSum.bind(this);
        this.logMul = this.logMul.bind(this);
        this.logSub = this.logSub.bind(this);
        this.logDiv = this.logDiv.bind(this);
    }

    setX(num) {
        if (typeof num !== 'number' || num === Infinity || num === -Infinity || isNaN(num)) {
            throw new Error('Переданное значение не число');
        }
        
        this.x = num;   
    }
    
    setY(num) {
        if (typeof num !== 'number' || num === Infinity || num === -Infinity || isNaN(num)) {
            throw new Error('Переданное значение не число');
        }

        this.y = num;
    }
    
    logSum() {
        console.log(this.x + this.y);
    }
    
    logMul() {
        console.log(this.x * this.y);
    }
    
    logSub() {
        console.log(this.x - this.y);
    }
    
    logDiv() {
        if (this.y === 0) {
            throw new Error('Второй операнд равняеться нулю!');
        }else {
            console.log(this.x / this.y);
        }
    }
}