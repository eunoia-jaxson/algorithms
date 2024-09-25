function solution(s){
    const ans = [];
    let answer = true;
    
    for (let e of s) {
        if (e === "(") ans.push(e);
        else if (ans.pop() === undefined) {
            answer = false;
            break;
        }
    }
    if (ans.length !== 0) answer = false;
    
    return answer;
}