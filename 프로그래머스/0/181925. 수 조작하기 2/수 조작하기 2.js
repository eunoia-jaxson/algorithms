function solution(numLog) {
    let answer = '';
    let prev = numLog[0];
    const operation = {
        '1': 'w',
        '-1': 's',
        '10': 'd',
        '-10': 'a',
        '0': '',
    }
    numLog.forEach((e, i) => {
        answer += operation[(e - prev).toString()];
        prev = e;
    });
    return answer;
}