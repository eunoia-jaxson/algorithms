function solution(cipher, code) {
    return Array.from(cipher).filter((_, i) => i % code === code - 1).join("");
}