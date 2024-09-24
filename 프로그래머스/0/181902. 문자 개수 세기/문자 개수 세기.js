function solution(my_string) {
    var answer = new Array(52).fill(0);
    Array.from(my_string).forEach((e) => {
        if (e === e.toUpperCase()) answer[e.charCodeAt() - 65] += 1;
        else answer[e.charCodeAt() - 71] += 1;
    });
    return answer;
}