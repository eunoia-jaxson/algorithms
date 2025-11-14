function solution(name) {
  let answer = 0;
  const len = name.length;

  // 1) 알파벳 변경 비용 계산
  for (let i = 0; i < len; i++) {
    const up = name.charCodeAt(i) - 65;        // 'A' -> 0, 'B' -> 1 ...
    const down = 26 - up;                      // 아래로 이동 시 비용
    answer += Math.min(up, down);
  }

  // 2) 좌우 이동 최소 비용 계산
  let move = len - 1; // 기본: 그냥 오른쪽으로 끝까지 가는 경우

  for (let i = 0; i < len; i++) {
    let next = i + 1;

    // 다음 연속된 'A' 구간 찾기
    while (next < len && name[next] === 'A') {
      next += 1;
    }

    // 조이스틱 좌우 이동 최소 이동 계산 3가지 경우 비교
    // ① 오른쪽만 가기
    // ② 왼쪽 돌아가기 (i까지 갔다가 뒤로)
    // ③ 오른쪽 갔다가 왼쪽으로 회귀
    move = Math.min(
      move,
      i * 2 + (len - next),      // 오른쪽 → 왼쪽
      (len - next) * 2 + i       // 왼쪽 → 오른쪽
    );
  }

  return answer + move;
}
