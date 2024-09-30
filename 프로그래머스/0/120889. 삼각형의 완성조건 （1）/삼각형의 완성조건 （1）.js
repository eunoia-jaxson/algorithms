function solution(sides) {
    const max = sides.sort((a, b) => a - b).pop();
    return sides[0] + sides[1] <= max ? 2 : 1;
}