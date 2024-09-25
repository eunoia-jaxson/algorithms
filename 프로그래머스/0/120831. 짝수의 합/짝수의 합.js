function solution(n) {
    return Array.from({length: n+1}, (_, i) => i % 2 === 0 ? i : 0).reduce((acc, curr) => acc += curr);
}