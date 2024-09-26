function solution(balls, share) {
    function factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        }
        return n * factorial(n - 1);
    }
    return Math.round(factorial(balls) / (factorial(balls - share) * factorial(share)));
}