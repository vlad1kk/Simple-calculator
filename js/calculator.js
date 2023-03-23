const OPERATION = {
    add: '+',
    subtract: '-',
    multiply: '*',
    division: '/',
};
function calculate ({a,b,operation}){
    let result = null;
    switch (operation) {
        case OPERATION.add:
            result = add(a + b);
            break;
    
        case OPERATION.subtract:
            result = subtract(a - b);
            break;
    
        case OPERATION.multiply:
            result = multiply(a * b);
            break;
    
        case OPERATION.division:
            result = division(a / b);
            break;
    
        default:
        break;
    }
}
