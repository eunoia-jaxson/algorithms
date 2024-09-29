function solution(my_string) {
    return Array.from(my_string).filter(e => !isNaN(e)).map(e => Number(e)).reduce((acc, curr) => acc + curr);
}