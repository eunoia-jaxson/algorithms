function solution(num_list) {
    var answer = 0;
    num_list.forEach(e => {
        while (e !== 1) {
            if (!(e % 2)) e = e / 2;
            else e = (e - 1) / 2;
            answer += 1;
        }
    });
    return answer;
}