function solution(num_list) {
    const odd = num_list.filter((_, i) => i % 2 === 0).reduce((acc, curr) => acc += curr);
    const even = num_list.filter((_, i) => i % 2 !== 0).reduce((acc, curr) => acc += curr); 
    return Math.max(odd, even);
}