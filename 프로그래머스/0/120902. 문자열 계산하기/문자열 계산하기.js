function solution(my_string) {
    const oper = {
        "+" : (a, b) => a + b,
        "-" : (a, b) => a - b,
    };
    const string = my_string.split(" ");
    const operator = string.filter(e => isNaN(e));
    const operand = string.filter(e => !isNaN(e));
    let answer = Number(operand.shift());
    
    while (operator.length) {
        answer = oper[operator.shift()](answer, Number(operand.shift()));
    }
    
    return answer;
}