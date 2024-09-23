function solution(my_string, m, c) {
    return my_string.match(RegExp(`.{${m}}`, 'g')).map(e => e[c-1]).join("");
}