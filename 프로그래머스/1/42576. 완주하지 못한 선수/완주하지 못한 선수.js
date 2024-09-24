function solution(participant, completion) {
    let countMap = {};

    for (let e of completion) {
        countMap[e] = (countMap[e] || 0) + 1;
    }

    let result = [];

    for (let e of participant) {
        // arr2에서 제거해야 할 개수가 있으면 하나씩 줄여나감
        if (countMap[e]) {
            countMap[e]--;
        } else {
            // 제거할 값이 아니면 결과 배열에 추가
            return e;
        }
    }
}