function solution(n, control) {
    control.split("").forEach((e, i) => {
        switch (e) {
            case 'w':
                n += 1;
                break;
            case 's':
                n -= 1;
                break;
            case 'd':
                n += 10;
                break;
            default:
                n -= 10;
        }
    });
    return n;
}