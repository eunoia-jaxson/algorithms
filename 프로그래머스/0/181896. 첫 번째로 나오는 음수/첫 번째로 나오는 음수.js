function solution(num_list) {
    var answer = -1;
    num_list.some((e, i) => {
       if (e < 0) {
           answer = i;
           return true;
       } 
    });
    return answer;
}