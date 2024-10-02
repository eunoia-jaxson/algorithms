function solution(n) {
    return Array.from(n.toString()).reduce((acc, curr) => acc + Number(curr), 0);
}