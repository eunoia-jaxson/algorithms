function solution(s) {
    let prev = 0;
    return s.split(" ").reduce((acc, curr) => {
        curr === "Z" ? acc -= prev : acc += Number(curr);
        prev = Number(curr);
        return acc;
    }, 0);
}