function solution(myString) {
    return Array.from(myString).map(e => e.charCodeAt() < 108 ? "l" : e).join("");
}