function solution(my_string, n) {
    return Array.from(my_string).map(e => e.repeat(n)).join("");
}