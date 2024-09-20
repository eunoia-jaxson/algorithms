function solution(a, b, c) {
    var answer = 0;
    const set = new Set([a, b, c]);
    if (set.size === 3) {
        answer = a + b + c;
    }
    else if (set.size === 2) {
        answer = (a + b + c) * (a*a + b*b + c*c);
    }
    else {
        answer = (a + b + c) * (a*a + b*b + c*c) * (a*a*a + b*b*b + c*c*c);
    }
    return answer;
}