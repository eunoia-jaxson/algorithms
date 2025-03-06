function solution(chicken) {
    var answer = 0;
    let remain = 0;
    
    while (chicken) {
        answer += Math.floor(chicken / 10);
        remain += chicken % 10;
        chicken = Math.floor(chicken / 10);
    }
    
    while (remain > 10) {
        answer += Math.floor(remain / 10);
        remain = Math.floor(remain / 10) + (remain % 10);
    }
    
    if (remain === 10) answer += 1;
    
    return answer;
}