function solution(clothes) {
    var answer = 1;
    const map = new Map();
    clothes.forEach((e) => map.set(e[1], (map.get(e[1]) || 0) + 1));
    for (const [_, v] of map) answer *= v+1;
    return answer - 1;
}