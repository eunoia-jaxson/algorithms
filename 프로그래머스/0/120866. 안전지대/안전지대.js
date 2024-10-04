function solution(board) {
    const n = board.length;
    let answer = [];
    
    function getAdjacentCells(x, y) {
      const directions = [
        [-1, -1], // 왼쪽 위 대각선
        [-1, 0],  // 위쪽
        [-1, 1],  // 오른쪽 위 대각선
        [0, -1],  // 왼쪽
        [0, 1],   // 오른쪽
        [1, -1],  // 왼쪽 아래 대각선
        [1, 0],   // 아래쪽
        [1, 1],   // 오른쪽 아래 대각선
      ];

      const adjacentCells = directions
        .map(direction => [x + direction[0], y + direction[1]]) // 좌표 계산
        .filter(([newX, newY]) => newX >= 0 && newX < n && newY >= 0 && newY < n); // 범위 안의 좌표만 포함

      return adjacentCells;
    }
    
    board.forEach((e, i) => {
        e.forEach((elem, j) => {
            if (elem === 1) {
                answer.push([j, i]);
                answer.push(...getAdjacentCells(j, i));
            }
        }); 
    });
    
    return n * n - new Set(answer.map(cell => JSON.stringify(cell))).size;
}