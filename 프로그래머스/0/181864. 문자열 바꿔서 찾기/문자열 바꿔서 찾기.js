function solution(myString, pat) {
    return Array.from(myString).map(e => e === "A" ? "B" : "A").join("").includes(pat) ? 1 : 0;
}