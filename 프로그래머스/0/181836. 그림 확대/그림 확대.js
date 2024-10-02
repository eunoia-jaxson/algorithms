function solution(picture, k) {
    return picture.flatMap(e => {
        let answer = e.replaceAll(".", ".".repeat(k));
        answer = answer.replaceAll("x", "x".repeat(k));
        return Array(k).fill(answer);
    });
}