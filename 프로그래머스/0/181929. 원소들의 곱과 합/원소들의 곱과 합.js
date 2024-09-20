function solution(num_list) {
    return num_list.reduce((acc, curr) => acc + curr, 0) ** 2 < num_list.reduce((acc, curr) => acc * curr, 1) ? 0 : 1;
}