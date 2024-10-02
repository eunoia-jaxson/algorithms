function solution(num, k) {
    return Array.from(num.toString()).indexOf(k.toString()) + 1 || -1;
}