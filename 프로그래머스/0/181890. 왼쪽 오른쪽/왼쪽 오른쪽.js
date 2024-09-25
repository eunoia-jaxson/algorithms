function solution(str_list) {
    let answer = [];
    str_list.some((e, i) => {
        if (e === "l") {
            answer = str_list.slice(0, i);
            return true;
        }
        else if (e === 'r') {
            answer = str_list.slice(i+1);
            return true;
        }
    });
    return answer;
}