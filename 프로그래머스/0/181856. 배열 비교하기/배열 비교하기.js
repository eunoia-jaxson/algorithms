function solution(arr1, arr2) {
    const sum1 = arr1.reduce((acc, curr) => acc + curr);
    const sum2 = arr2.reduce((acc, curr) => acc + curr);
    return arr1.length === arr2.length ? sum1 === sum2 ? 0 : (sum1 - sum2) / Math.abs(sum1 - sum2) : (arr1.length - arr2.length) / Math.abs(arr1.length - arr2.length);
}