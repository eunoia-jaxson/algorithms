function solution(arr, queries) {
    var answer = [];
    queries.forEach((e, i) => {
        const min = Math.min(...arr.slice(e[0], e[1]+1).filter((item) => e[2] < item));
        answer.push(min === Infinity ? -1 : min);
    });
    return answer;
}