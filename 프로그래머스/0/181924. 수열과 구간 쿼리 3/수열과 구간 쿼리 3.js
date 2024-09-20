function solution(arr, queries) {
    queries.forEach((e, i) => {
        let temp = arr[e[0]];
        arr[e[0]] = arr[e[1]];
        arr[e[1]] = temp;
    });
    return arr;
}