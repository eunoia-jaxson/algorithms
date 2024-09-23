function solution(n) {
    return Array.from({length: n}, (_, i) => i + 1).filter(e => e % 2 === 1);
}