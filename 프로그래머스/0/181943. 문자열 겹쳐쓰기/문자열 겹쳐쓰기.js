function solution(my_string, overwrite_string, s) {
    let pre_str = my_string.substr(0, s);
    let replace_str = my_string.substr(s, overwrite_string.length);
    let answer = my_string.substr(s, my_string.length).replace(replace_str, overwrite_string);
    return pre_str + answer;
}