function solution(myString) {
    return Array.from(myString).map(e => e.charCodeAt() === 65 || e.charCodeAt() === 97 ? "A" : e.toLowerCase()).join("");
}