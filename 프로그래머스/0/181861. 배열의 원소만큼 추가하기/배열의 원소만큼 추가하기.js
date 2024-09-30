function solution(arr) {
    return arr.map(e => Array(e).fill(e)).flat();
}