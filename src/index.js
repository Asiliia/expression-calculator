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

    return Number(array[0]);

  /*   let mult = arr.reduce(function(sum, currentValue, i, array) {
        if(currentValue === '*') {
            console.log(sum);
            return i === 1 ? Number(array[i-1]) * Number(array[i+1]) : sum * Number(array[i+1]);
        }
        else if(currentValue === '/') {
            console.log(sum);
            return i === 1 ? Number(array[i-1]) / Number(array[i+1]) : sum / Number(array[i+1]);
        }
        else if(currentValue === '+') {
            console.log(sum);
            return sum + (Number(array[i-1]) + Number(array[i+1]));
        }
        else if(currentValue === '-') {
            console.log(sum);
            return sum + (Number(array[i-1]) - Number(array[i+1]));
        }
            console.log(sum);
            return sum;
     
      },1);

      return mult */
      
}

module.exports = {
    expressionCalculator
}