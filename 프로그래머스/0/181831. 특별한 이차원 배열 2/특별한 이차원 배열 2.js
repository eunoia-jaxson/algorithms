function solution(arr) {
    return Number(arr.every((e, i) => e.every((_, j) => arr[i][j] === arr[j][i])));
}