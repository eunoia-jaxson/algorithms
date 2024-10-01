function solution(rank, attendance) {
    const index = rank.filter((_, i) => attendance[i]).sort((a, b) => a - b).slice(0, 3);
    return 10000 * rank.indexOf(index[0]) + 100 * rank.indexOf(index[1]) + rank.indexOf(index[2]);
}