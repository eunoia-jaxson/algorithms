function solution(arr) {
    var answer = -1;
    let array = [];
    while (JSON.stringify(arr) !== JSON.stringify(array)) {
        array = arr;
        arr = arr.map(e => e >= 50 && !(e % 2) ? e / 2 : e < 50 && e % 2 ? e * 2 + 1 : e);
        answer += 1;
    }
    return answer;
}