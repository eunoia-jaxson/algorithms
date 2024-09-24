function solution(arr, intervals) {
    const answer = intervals.map(e => arr.slice(e[0], e[1] + 1));
    return [...answer[0], ...answer[1]];
}