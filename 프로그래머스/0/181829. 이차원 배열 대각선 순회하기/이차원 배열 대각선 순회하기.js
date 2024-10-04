function solution(board, k) {
    return board.map((e, i) => e.filter((_, j) => i + j <= k)).flat().reduce((acc, curr) => acc + curr);
}