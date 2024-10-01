function solution(my_string, num1, num2) {
    const string = Array.from(my_string);
    const temp = string[num1];
    string[num1] = string[num2];
    string[num2] = temp;
    return string.join("");
}