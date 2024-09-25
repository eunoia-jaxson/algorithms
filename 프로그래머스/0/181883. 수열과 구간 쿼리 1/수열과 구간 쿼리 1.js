function solution(arr, queries) {
    queries.forEach(([s, e]) => {
        arr.forEach((_, i) => s <= i && i <= e ? arr[i] += 1 : null);
    });
    return arr;
}