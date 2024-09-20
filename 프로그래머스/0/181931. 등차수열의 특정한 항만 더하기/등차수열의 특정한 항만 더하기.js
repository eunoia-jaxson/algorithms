function solution(a, d, included) {
    var answer = 0;
    included.forEach((e, i) => {
       if (e) answer += a + d * i; 
    });
    return answer;
}