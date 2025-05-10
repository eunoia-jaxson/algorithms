const fs = require('fs');

const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const office = input.slice(1).map(line => line.split(' ').map(Number));

const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

const cctvDirs = {
  1: [[0], [1], [2], [3]],
  2: [[0, 2], [1, 3]],
  3: [[0, 1], [1, 2], [2, 3], [3, 0]],
  4: [[0, 1, 2], [1, 2, 3], [2, 3, 0], [3, 0, 1]],
  5: [[0, 1, 2, 3]]
};

const cctvs = [];
for (let y = 0; y < N; y++) {
  for (let x = 0; x < M; x++) {
    const v = office[y][x];
    if (v >= 1 && v <= 5) cctvs.push({ y, x, type: v });
  }
}

let minBlind = Infinity;

function simulate(orders) {
  const tmp = office.map(row => row.slice());

  for (let i = 0; i < cctvs.length; i++) {
    const { y, x, type } = cctvs[i];
    const dirs = cctvDirs[type][orders[i]];
    for (const dir of dirs) {
      let ny = y + dy[dir], nx = x + dx[dir];
      while (ny >= 0 && ny < N && nx >= 0 && nx < M && tmp[ny][nx] !== 6) {
        if (tmp[ny][nx] === 0) tmp[ny][nx] = -1;
        ny += dy[dir];
        nx += dx[dir];
      }
    }
  }

  let count = 0;
  for (let i = 0; i < N; i++)
    for (let j = 0; j < M; j++)
      if (tmp[i][j] === 0) count++;
  return count;
}

// DFS over possible orientations
function dfs(depth, orders) {
  if (depth === cctvs.length) {
    const blind = simulate(orders);
    if (blind < minBlind) minBlind = blind;
    return;
  }

  const { type } = cctvs[depth];
  const options = cctvDirs[type].length;
  for (let i = 0; i < options; i++) {
    orders.push(i);
    dfs(depth + 1, orders);
    orders.pop();
  }
}

if (cctvs.length === 0) {
  // No CCTV: count zeros directly
  let zeros = 0;
  for (let i = 0; i < N; i++)
    for (let j = 0; j < M; j++)
      if (office[i][j] === 0) zeros++;
  console.log(zeros);
} else {
  dfs(0, []);
  console.log(minBlind);
}
