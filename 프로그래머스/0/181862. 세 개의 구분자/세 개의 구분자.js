function solution(myStr) {
    const answer = myStr.replaceAll("a", " ").replaceAll("b", " ").replaceAll("c", " ").split(" ").filter(e => e);
    return answer.length ? answer : ["EMPTY"];
}