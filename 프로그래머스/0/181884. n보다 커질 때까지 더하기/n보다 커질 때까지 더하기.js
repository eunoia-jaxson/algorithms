function solution(numbers, n) {
    return numbers.reduce((acc, curr) => {
        if (acc <= n) acc += curr;
        return acc;
    }, 0);
}