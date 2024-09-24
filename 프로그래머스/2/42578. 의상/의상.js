function solution(clothes) {
    var answer = 0;
    const map = new Map();
    clothes.forEach((e) => map.set(e[1], (map.get(e[1]) || 0) + 1));
    let count = 1;
    for (const [k, v] of map) count *= v+1;
    answer += count;
    return answer - 1;
}