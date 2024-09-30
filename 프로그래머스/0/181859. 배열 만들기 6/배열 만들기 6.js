function solution(arr) {
    var answer = [];
    arr.forEach(e => {
        if (!answer.length) answer.push(e);
        else if (answer[answer.length - 1] === e) answer.pop();
        else answer.push(e);
    });
    return answer.length ? answer : [-1];
}