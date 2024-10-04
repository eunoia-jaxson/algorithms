function solution(numbers) {
    if (numbers.length === 2) return numbers[0] * numbers[1];
    const pos = numbers.filter(e => e >= 0);
    const neg = numbers.filter(e => e < 0);
    const answer = [];
    
    if (pos.length) {
        const max = Math.max(...pos);
        pos.splice(pos.indexOf(max), 1);
        answer.push(max * (Math.max(...pos)));
    }
    
    if (neg.length) {
        const min = Math.min(...neg);
        neg.splice(neg.indexOf(min), 1);
        answer.push(min * (Math.min(...neg)));
    }
    
    return Math.max(...answer);
}