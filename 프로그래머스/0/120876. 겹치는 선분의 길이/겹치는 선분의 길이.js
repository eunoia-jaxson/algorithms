function solution(lines) {
    const start = lines.map(e => e[0]);
    const end = lines.map(e => e[1]);
    const progress = [];
    let answer = 0;
    for (let i = Math.min(...start); i <= Math.max(...end); i++) {
        lines.forEach((e, index) => {
            if (e[0] === i) progress.push(lines[index]);
            else if (e[1] === i) progress.splice(progress.indexOf(lines[index]), 1);
        });
        if (progress.length > 1) answer += 1;
    }
    return answer;
}