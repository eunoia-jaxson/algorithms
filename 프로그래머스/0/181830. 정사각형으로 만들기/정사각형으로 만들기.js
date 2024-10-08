function solution(arr) {
    const row = arr.length;
    const col = arr[0].length;
    
    if (row < col) {
        for (let i = 0; i < col - row; i++) {
            arr.push(Array(col).fill(0));
        }
    }
    else if (row > col) {
        arr.forEach((_, index) => {
            for (let i = 0; i < row - col; i++) {
                arr[index].push(0);
            }
        });
    }
    return arr;
}