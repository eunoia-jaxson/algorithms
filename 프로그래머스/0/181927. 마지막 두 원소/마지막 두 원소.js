function solution(num_list) {
    const n1 = num_list[num_list.length - 1];
    const n2 = num_list[num_list.length - 2];
    const result = n1 <= n2 ? [...num_list, n1 * 2] : [...num_list, n1 - n2];
    return result;
}