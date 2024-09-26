function solution(emergency) {
    const priority = Array.from(emergency).sort((a, b) => b - a);
    return emergency.map(e => priority.indexOf(e) + 1);
}