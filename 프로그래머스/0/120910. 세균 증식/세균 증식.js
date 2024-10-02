function solution(n, t) {
    return Array(t).fill().reduce(acc => acc * 2, n);
}