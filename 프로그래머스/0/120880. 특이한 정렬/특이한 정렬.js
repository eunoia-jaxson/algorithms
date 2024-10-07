function solution(numlist, n) {
    return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) === 0 ? b - a : Math.abs(a - n) - Math.abs(b - n));
}