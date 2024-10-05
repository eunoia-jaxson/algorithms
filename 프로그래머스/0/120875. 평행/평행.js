function solution(dots) {
    function tilt(a, b, c, d) {
       return (dots[a][1] - dots[b][1]) / (dots[a][0] - dots[b][0]) === (dots[c][1] - dots[d][1]) / (dots[c][0] - dots[d][0]);
    }
    
    return Number(tilt(0, 1, 2, 3) || tilt(0, 2, 1, 3) || tilt(0, 3, 1, 2) || tilt(1, 2, 0, 3));
}