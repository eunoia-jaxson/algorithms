function solution(arr) {
    const answer = [];
    arr.forEach((e, i) => {
        if (i === 0) answer.push(e);
        else if (arr[i-1] !== e) answer.push(e);
    });
    return answer;
}