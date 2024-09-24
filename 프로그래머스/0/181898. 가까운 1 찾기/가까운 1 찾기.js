function solution(arr, idx) {
    let answer = -1;
    for (const [i, e] of arr.entries()) {
        if (i >= idx && e === 1) {
            answer = i;
            break;
        }
    }
    return answer;
}