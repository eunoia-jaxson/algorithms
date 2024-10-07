function solution(score) {
    const answer = score.map(e => (e[0] + e[1]) / 2);
    const rank = Array.from(answer).sort((a, b) => b - a);
    return answer.map(e => rank.indexOf(e) + 1);
}