function solution(n) {
    let k = 1;
    while (n * k % 6 !== 0) {
        k += 1;
    }
    return n * k / 6;
}