function solution(array, height) {
    return array.filter(e => height < e).length;
}