function solution(a, b) {
    const ab = parseInt(a.toString() + b.toString());
    const ba = parseInt(b.toString() + a.toString());
    
    if (ab === ba) {
        return ab;
    } else if (ab > ba) {
        return ab;
    } else {
        return ba;
    }
}