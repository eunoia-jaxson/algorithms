function solution(n) {
    let count = 1;
    for (let i = 0; i < n; i++) {
        if (n % i === 0) count += 1; 
    }
    return count;
}