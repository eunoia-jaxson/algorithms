function solution(my_string) {
    Array.from("aeiou").forEach(e => {
        my_string = my_string.replaceAll(e, "");
    });
    return my_string;
}