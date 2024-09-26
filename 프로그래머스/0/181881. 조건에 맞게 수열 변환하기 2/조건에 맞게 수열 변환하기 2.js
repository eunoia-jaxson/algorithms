function solution(arr) {
    var answer = 0;
    let array = [];
    while (true) {
        array = arr.map(e => e >= 50 && !(e % 2) ? e / 2 : e < 50 && e % 2 ? e * 2 + 1 : e);
        if (JSON.stringify(arr) === JSON.stringify(array)) break;
        answer += 1;
        arr = array;
    }
    return answer;
}