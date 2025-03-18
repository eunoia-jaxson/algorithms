function solution(prices) {
  const n = prices.length;
  const answer = new Array(n).fill(0);
  const stack = [];
  
  for (let i = 0; i < n; i++) {
    // 현재 가격보다 큰 가격이 스택에 있다면, 해당 시점에서 가격이 떨어진 것으로 처리
    while (stack.length && prices[i] < prices[stack[stack.length - 1]]) {
      const idx = stack.pop();
      answer[idx] = i - idx;
    }
    // 현재 인덱스를 스택에 추가
    stack.push(i);
  }
  
  // 마지막까지 가격이 떨어지지 않은 경우 처리: 끝까지 유지된 시간 = 마지막 인덱스 - 현재 인덱스
  while (stack.length) {
    const idx = stack.pop();
    answer[idx] = n - 1 - idx;
  }
  
  return answer;
}