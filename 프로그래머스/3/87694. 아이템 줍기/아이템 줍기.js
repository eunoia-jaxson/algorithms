function solution(rectangle, characterX, characterY, itemX, itemY) {
  const SIZE = 102;
  const board = Array.from({ length: SIZE }, () => Array(SIZE).fill(0));
  const visited = Array.from({ length: SIZE }, () => Array(SIZE).fill(false));

  // 1) 모든 직사각형 좌표를 2배로 확장해서 전체 영역 채우기
  for (const [x1, y1, x2, y2] of rectangle) {
    const nx1 = x1 * 2;
    const ny1 = y1 * 2;
    const nx2 = x2 * 2;
    const ny2 = y2 * 2;

    for (let y = ny1; y <= ny2; y++) {
      for (let x = nx1; x <= nx2; x++) {
        board[y][x] = 1;
      }
    }
  }

  // 2) 각 직사각형의 내부를 제거해서 테두리만 남기기
  for (const [x1, y1, x2, y2] of rectangle) {
    const nx1 = x1 * 2;
    const ny1 = y1 * 2;
    const nx2 = x2 * 2;
    const ny2 = y2 * 2;

    for (let y = ny1 + 1; y < ny2; y++) {
      for (let x = nx1 + 1; x < nx2; x++) {
        board[y][x] = 0;
      }
    }
  }

  const startX = characterX * 2;
  const startY = characterY * 2;
  const targetX = itemX * 2;
  const targetY = itemY * 2;

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const queue = [[startX, startY, 0]];
  visited[startY][startX] = true;

  while (queue.length > 0) {
    const [x, y, dist] = queue.shift();

    if (x === targetX && y === targetY) {
      return dist / 2;
    }

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx < 0 || ny < 0 || nx >= SIZE || ny >= SIZE) continue;
      if (visited[ny][nx]) continue;
      if (board[ny][nx] !== 1) continue;

      visited[ny][nx] = true;
      queue.push([nx, ny, dist + 1]);
    }
  }

  return 0;
}