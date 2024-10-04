function solution(keyinput, board) {
    const command = {
        "left": [-1, 0],
        "right": [1, 0],
        "up": [0, 1],
        "down": [0, -1],
    };
    
    var answer = [0, 0];
    keyinput.forEach(e => {
        answer = answer.map((elem, i) => elem + command[e][i]);
        if (-Math.floor(board[0] / 2) > answer[0]) {
            answer[0] += 1;
        }
        else if (answer[0] > Math.floor(board[0] / 2)) {
            answer[0] -= 1;
        }
        else if (-Math.floor(board[1] / 2) > answer[1]) {
            answer[1] += 1;
        }
        else if (answer[1] > Math.floor(board[1] / 2)) {
            answer[1] -= 1;
        }
    });
    return answer;
}