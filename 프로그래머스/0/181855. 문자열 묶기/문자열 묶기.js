function solution(strArr) {
    const max = Array(30).fill(0);
    strArr.forEach(e => max[e.length - 1] += 1);
    return Math.max(...max);
}