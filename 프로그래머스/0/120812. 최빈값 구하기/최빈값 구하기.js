function solution(array) {
    let c = 0;
    const a = [];
    const count = [];
    array.forEach(e => {
        if (a.includes(e)) count[a.indexOf(e)] += 1;
        else {
            a.push(e);
            count.push(1);
        }
    });
    const max = Math.max(...count);
    count.forEach(e => e === max ? c += 1 : null);
    return c === 1 ? a[count.indexOf(max)] : -1;
}