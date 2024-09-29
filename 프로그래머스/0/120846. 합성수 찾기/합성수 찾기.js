function solution(n) {
    var answer = 0;
    Array.from({length: n - 3}, (_, i) => i + 4).forEach(e => {
        for (let i = 2; i < e; i++) {
            if (e % i === 0) {
                answer += 1;
                break;
            }
        }
    });
    return answer;
}