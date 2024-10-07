function solution(babbling) {
    const pron = ["aya", "ye", "woo", "ma"];
    return babbling.filter(e => {
        pron.forEach(elem => e = e.replace(elem, " "));
        return e.trim() === "";
    }).length;
}