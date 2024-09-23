function solution(q, r, code) {
    return Array.from(code).filter((_, i) => i % q === r).join("");
}