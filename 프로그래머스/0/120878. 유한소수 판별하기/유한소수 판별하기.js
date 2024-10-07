function solution(a, b) {
    var answer = new Set(primeFactors(b / gcd(a, b)));
    answer.delete(2);
    answer.delete(5);
    return answer.size ? 2 : 1;
}

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function primeFactors(n) {
    let factors = [];
    
    // 2로 나누어 떨어지는 만큼 나누기
    while (n % 2 === 0) {
        factors.push(2);
        n = n / 2;
    }
    
    // 3부터 시작하여 홀수로 나누기
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            factors.push(i);
            n = n / i;
        }
    }
    
    // n이 2 이상의 소수로 남아 있을 경우
    if (n > 2) {
        factors.push(n);
    }
    
    return factors;
}