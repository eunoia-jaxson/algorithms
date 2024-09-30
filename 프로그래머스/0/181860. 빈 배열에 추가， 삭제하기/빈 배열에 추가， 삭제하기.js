function solution(arr, flag) {
    var answer = [];
    flag.forEach((e, i) => {
        if (e) {
            answer.push(Array(arr[i] * 2).fill(arr[i]));
            answer = answer.flat();
        }
        else {
            answer = answer.slice(0, answer.length - arr[i]);
        }
    });
    return answer;
}