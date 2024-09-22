function solution(n) {
    function collatz(n) {
        if (n === 1) return [1];
        else if (n % 2 === 0) {
            return [n].concat(collatz(n / 2));
        } else {
            return [n].concat(collatz(3 * n + 1));
        }
    }
    return collatz(n);
}