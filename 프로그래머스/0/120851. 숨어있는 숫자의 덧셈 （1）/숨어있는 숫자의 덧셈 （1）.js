function solution(my_string) {
    return Array.from(my_string).filter(e => !isNaN(e)).reduce((acc, curr) => acc + Number(curr), 0);
}