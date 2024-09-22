function solution(l, r) {
    var answer = [];
    
    function generateNumbers(current) {
        if (current > r) {
            return;
        } else if (current >= l && current <= r) {
            answer.push(current);
        }
        
        generateNumbers(current * 10 + 0);
        generateNumbers(current * 10 + 5);
    }
    
    generateNumbers(5);
    
    if (answer.length === 0) {
        return [-1];
    }
    
    return answer.sort((a, b) => a - b);
}