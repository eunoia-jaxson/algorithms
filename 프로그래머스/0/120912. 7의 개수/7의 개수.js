function solution(array) {
    return array.flatMap(e => Array.from(e.toString())).filter(e => e === "7").length;
}