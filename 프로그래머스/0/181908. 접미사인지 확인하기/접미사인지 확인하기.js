function solution(my_string, is_suffix) {
    return Array.from(my_string).map((_, i) => my_string.slice(i)).includes(is_suffix) ? 1 : 0;
}