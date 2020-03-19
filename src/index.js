function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {  
    
    let array = expr.split('+').join(' + ').split('-').join(' - ').split('*').join(' * ').split('/').join(' / ').split(')').join(' ) ').split('(').join(' ( ').split(' ').filter(e => e !== '');
    let countL = array.filter(x => x === '(').length;
    let countR = array.filter(x => x === ')').length;
    if(countL !== countR) {
        throw("ExpressionError: Brackets must be paired");;
    }

   if(countL) {
    for (let i = array.length -1 ; i > -1; i--) {
        if(array[i] === '(') {
            let j = array.indexOf(')');
            let curArr = array.splice(i, j-i+1);
            curArr.pop();
            curArr.shift();
            console.log('curArr');
            console.log(curArr);
            let res = calc(curArr);
            console.log('res');
            console.log(res);
            array.splice(i, 0, res.toString())
           
        }
        console.log('---');
        console.log(array);
    }
}

let res = calc(array);

console.log(array);
    return res;      
}

let calc = (array) => {
    while (array.includes("*") || array.includes("/") || array.includes("+") || array.includes("-")) {      
  
        for (let i = 0; i < array.length; i++) {
            if(array[i] === '/') {
                if(Number(array[i+1]) === 0)  
                   throw("TypeError: Division by zero.");
                let res = Number(array[i-1]) / Number(array[i+1]);
                array.splice(i-1, 3, res.toString())
                i = i-1;
                console.log(array);
            }
            if(array[i] === '*') {
                let res = Number(array[i-1]) * Number(array[i+1]);
                array.splice(i-1, 3, res.toString())
                i = i-1;
                console.log(array);
            }
        }

        for (let i = 0; i < array.length; i++) {
            if(array[i] === '-') {
                let res = Number(array[i-1]) - Number(array[i+1]);
                array.splice(i-1, 3, res.toString())
                i = i-1;
                console.log(array);
            }
            if(array[i] === '+') {
                let res = Number(array[i-1]) + Number(array[i+1]);
                array.splice(i-1, 3, res.toString())
                i = i-1;
                console.log(array);
            }
        }
    }

   return Number(array[0])
};

module.exports = {
    expressionCalculator
}