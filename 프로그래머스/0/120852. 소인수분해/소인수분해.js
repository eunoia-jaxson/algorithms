function solution(n) {
    let factors = [];
    
    // 2로 나누면서 나눠질 수 있을 때까지 나눔
    while (n % 2 === 0) {
        factors.push(2);
        n /= 2;
    }
    
    // 3부터 시작하여 n이 1이 될 때까지 반복 (홀수만 검사)
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            factors.push(i);
            n /= i;
        }
    }
    
    // n이 소수로 남아있을 경우
    if (n > 2) {
        factors.push(n);
    }
    
    return Array.from(new Set(factors));
}