function solution(todo_list, finished) {
    return finished.reduce((acc, curr, i) => {
        if (!curr) acc.push(i);
        return acc;
    }, []).map(e => todo_list[e]);
}