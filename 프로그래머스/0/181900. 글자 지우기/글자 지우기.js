function solution(my_string, indices) {
    const answer = Array.from(my_string);
    indices.forEach((e) => {
        delete answer[e];
    });
    return answer.join("");
}