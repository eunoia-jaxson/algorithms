function solution(arr) {
    return Number(!arr.some((e, i) => e.some((_, j) => arr[i][j] !== arr[j][i])));
}