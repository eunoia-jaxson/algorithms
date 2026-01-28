function solution(routes) {
  routes.sort((a, b) => a[1] - b[1]);

  let cameras = 0;
  let camPos = -Infinity;

  for (const [start, end] of routes) {
    if (start > camPos) {
      camPos = end;
      cameras++;
    }
  }

  return cameras;
}
