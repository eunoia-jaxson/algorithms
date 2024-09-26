function solution(rsp) {
    return Array.from(rsp).map(e => e === "2" ? 0 : e === "5" ? 2 : 5).join("");
}