function solution(arr, queries) {
    queries.forEach(([s, e, k]) => {
        arr.forEach((_, i) => {
            if (s <= i && i <= e) {
                if (i % k === 0) arr[i] += 1; 
            }
        });
    });
    return arr;
}