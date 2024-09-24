function solution(arr) {
    const index = [];
    arr.forEach((e, i) => {
        if (e === 2) index.push(i);
    });
    return index.length === 0 ? [-1] : arr.slice(index[0], index[index.length - 1] + 1);
}