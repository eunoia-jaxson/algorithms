function solution(maps) {
  const rows = maps.length;
  const cols = maps[0].length;

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const visited = Array.from({ length: rows }, () =>
    Array(cols).fill(false)
  );
  const distance = Array.from({ length: rows }, () =>
    Array(cols).fill(0)
  );

  const queue = [[0, 0]];
  let front = 0;
  visited[0][0] = true;
  distance[0][0] = 1;

  while (front < queue.length) {
    const [x, y] = queue[front++];

    if (x === rows - 1 && y === cols - 1) {
      return distance[x][y];
    }

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (
        nx >= 0 && nx < rows &&
        ny >= 0 && ny < cols &&
        maps[nx][ny] === 1 &&
        !visited[nx][ny]
      ) {
        visited[nx][ny] = true;
        distance[nx][ny] = distance[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }

  return -1;
}
