function solution(n) {
    if (n % 2 === 0) {
        return Array.from({length: n/2}, (value, index) => index * 2 + 2).reduce((answer, element) => {return answer += element * element}, 0);
    } else {
        return Array.from({length: n/2 + 1}, (value, index) => index * 2 + 1).reduce((answer, element) => {return answer += element}, 0);
    }
}