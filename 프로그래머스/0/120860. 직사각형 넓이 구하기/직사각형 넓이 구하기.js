function solution(dots) {
    function len (i) {
        return Math.max(...dots.map(e => e[i])) - Math.min(...dots.map(e => e[i]));
    }
    return len(0) * len(1);
}