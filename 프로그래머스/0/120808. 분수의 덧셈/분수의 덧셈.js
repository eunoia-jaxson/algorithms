function solution(numer1, denom1, numer2, denom2) {
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }

    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }
    
    let commonDenominator = lcm(denom1, denom2);
    let numerator = (numer1 * (commonDenominator / denom1)) + (numer2 * (commonDenominator / denom2));
    let commonDivisor = gcd(numerator, commonDenominator);
    return [numerator / commonDivisor, commonDenominator / commonDivisor];
}