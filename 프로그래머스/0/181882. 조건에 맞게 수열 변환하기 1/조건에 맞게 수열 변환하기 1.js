function solution(arr) {
    return arr.map(e => e >= 50 && !(e % 2) ? e / 2 : e < 50 && e % 2 ? e * 2 : e);
}