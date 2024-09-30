function solution(array, n) {
    let closest = 100;
    let index;
    array.forEach((e, i) => {
        if (Math.abs(n - e) < closest) {
            closest = Math.abs(n - e);
            index = i;
        }
        else if (Math.abs(n - e) === closest && e < array[index]) index = i;
    });
    return array[index];
}