function solution(numbers, direction) {
    return direction === "right" ? [numbers.pop()].concat(numbers) : numbers.concat(numbers.splice(0, 1));
}