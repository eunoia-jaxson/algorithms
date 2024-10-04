function solution(n) {
    var answer = Array.from({length: n}, () => Array(n).fill(0));
    const direction = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];
    let [i, j, k, l] = [1, 0, 0, 0];
    
    while (i <= n * n) {
        while (answer[j][k] === 0) {
            answer[j][k] = i;
            if (j < n && 0 <= j && k < n && 0 <= k) {
                j += direction[l % 4][0];
                k += direction[l % 4][1];
                i += 1;
            }
            
            if (j >= n || 0 > j || k >= n || 0 > k) {
                j -= direction[l % 4][0];
                k -= direction[l % 4][1];
            }
            else if (answer[j][k] !== 0) {
                j -= direction[l % 4][0];
                k -= direction[l % 4][1];
            }
        }
        l += 1;
        j += direction[l % 4][0];
        k += direction[l % 4][1];
    }
    return answer;
}