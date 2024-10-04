function solution(board, k) {
    return board.flatMap((e, i) => e.filter((_, j) => i + j <= k)).reduce((acc, curr) => acc + curr);
}