function solution(num, k) {
    const i = Array.from(num.toString()).indexOf(k.toString());
    return i === -1 ? i : i + 1;
}