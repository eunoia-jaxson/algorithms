function solution(n) {
    function factorial(n) {
        if (n === 0 || n === 1) return 1;
        else return n * factorial(n - 1);
    }
    var answer = 0;
    while (factorial(answer) <= n) {
        answer += 1;
    }
    return answer - 1;
}