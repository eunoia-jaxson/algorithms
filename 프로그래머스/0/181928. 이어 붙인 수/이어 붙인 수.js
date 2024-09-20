function solution(num_list) {
    let odd = '';
    let even = '';
    num_list.forEach((e, i) => {
        e % 2 === 0 ? even += e : odd += e;
    });
    return parseInt(odd) + parseInt(even);
}