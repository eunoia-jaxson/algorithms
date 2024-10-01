function solution(n_str) {
    for (const [i, e] of Array.from(n_str).entries()) {
        if (e !== "0") {
            return n_str.slice(i);
        }
    }
}