function solution(n) {
    const answer = Array.from({length: n}, () => Array(n).fill(0));
    for (let i = 0; i < answer.length; i++) answer[i][i] = 1;
    return answer;
}