function solution(intStrs, k, s, l) {
    return intStrs.map(e => Number(e.substr(s, l))).filter(e => k < e);
}