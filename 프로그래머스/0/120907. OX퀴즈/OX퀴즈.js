function solution(quiz) {
    const oper = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
    };
    
    return quiz.map(e => {
        const [a, op, b, _, c] = e.split(" ");
        return oper[op](Number(a), Number(b)) === Number(c) ? "O" : "X";
    });
}