function solution(num_str) {
    return Array.from(num_str).reduce((acc, curr) => acc + Number(curr), 0);
}