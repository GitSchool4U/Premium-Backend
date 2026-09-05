// ************* COMMON JS
// function sum(a,b){
//     return a+b;
// }

// function subtract(a,b){
//     return a-b;
// }

// // module.exports = sum;
// module.exports = "manas kumar lal";

// module.exports = {
//     sum,
//     subtract,
// }


// exports.alpha = (a,b) => a+b;
// exports.beta = (a,b) => a-b;



// ES6 MODULE

function sum(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

export default sum;

export {
    subtract,
    multiply
}

export const name = "manas kumar lal"
export const age = 66