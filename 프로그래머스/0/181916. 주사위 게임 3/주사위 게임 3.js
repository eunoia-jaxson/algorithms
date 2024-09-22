function solution(a, b, c, d) {
    let score;
    let arr = [a, b, c, d];
    const set = new Set([a, b, c, d]);
    if (set.size === 4) score = Math.min(...set);
    else if (set.size === 3) {
        set.forEach(e => arr.splice(arr.indexOf(e), 1));
        set.delete(arr[0]);
        score = Array.from(set).reduce((acc, item) => acc * item, 1);
    }
    else if (set.size === 2) {
        set.forEach(e => arr.splice(arr.indexOf(e), 1));
        const a = Array.from(set);
        if (arr[0] === arr[1]) {
            if (a[0] === arr[0]) score = (10 * a[0] + a[1]) ** 2;
            else score = (10 * a[1] + a[0]) ** 2;
        }
        else {
            score = (a[0] + a[1]) * Math.abs(a[0] - a[1]);
        }
    }
    else score = 1111 * Array.from(set)[0];
    return score;
}