function solution(progresses, speeds) {
    const answer = [];
    while (progresses.length !== 0) {
        const progress = progresses.map((e, i) => e + Math.ceil((100 - progresses[0]) / speeds[0]) * speeds[i]);
        console.log(progress);
        const finish = progress.findIndex(e => e < 100);
        answer.push(finish < 0 ? progress.length : progress.slice(0, finish).length);
        progresses = finish < 0 ? [] : progress.slice(finish);
        speeds = finish < 0 ? [] : speeds.slice(finish);
    }
    return answer;
}