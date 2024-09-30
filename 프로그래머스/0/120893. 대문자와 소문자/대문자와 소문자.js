function solution(my_string) {
    return Array.from(my_string).map(e => e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()).join("");
}