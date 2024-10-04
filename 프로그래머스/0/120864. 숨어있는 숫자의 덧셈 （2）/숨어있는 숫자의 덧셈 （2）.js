function solution(my_string) {
    return my_string.split(/[a-zA-Z]+/).filter(Boolean).reduce((acc, curr) => acc + Number(curr), 0);
}