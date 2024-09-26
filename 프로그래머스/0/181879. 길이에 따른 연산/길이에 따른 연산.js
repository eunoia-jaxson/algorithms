function solution(num_list) {
    return num_list.length < 11 ? num_list.reduce((acc, curr) => acc *= curr) : num_list.reduce((acc, curr) => acc += curr);
}