function solution(array) {
    return Array.from(array.join("")).filter(e => e === "7").length;
}