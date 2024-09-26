function solution(age) {
    return Array.from(age.toString()).map(e => String.fromCharCode(Number(e) + 97)).join("");
}