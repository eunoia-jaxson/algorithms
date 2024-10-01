function solution(s) {
    return Array.from(s).filter(e => s.indexOf(e) === s.lastIndexOf(e)).sort().join("");
}