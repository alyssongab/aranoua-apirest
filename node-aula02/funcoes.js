
// declaration (hoisted)
function somarDeclaration(a,b){
    return a+b;
}

// function expression
const somarExpression = function(a,b){
    return a+b;
}

// arrow function
const somarArrow = (a,b) => a+b;

console.log("Soma com arrow:",somarArrow(5,5));