function solution(names) {
    return names.reduce((acc, curr, i) => {
        if (i % 5 === 0) {
            acc.push(curr);
        }
        return acc;
    }, []);
}