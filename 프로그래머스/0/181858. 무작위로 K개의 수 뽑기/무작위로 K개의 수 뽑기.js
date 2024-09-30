function solution(arr, k) {
    var answer = Array.from(new Set(arr)).slice(0, k);
    while (answer.length < k) {
        answer.push(-1);
    }
    return answer;
}