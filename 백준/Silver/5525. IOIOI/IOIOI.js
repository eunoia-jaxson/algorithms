const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const M = parseInt(input[1]);
const S = input[2];

function countPatternOccurrences(N, S) {
    const patternLength = 2 * N + 1;
    let count = 0;
    
    for (let i = 0; i <= S.length - patternLength; i++) {
        let isPattern = true;
        
        for (let j = 0; j < patternLength; j++) {
            if (j % 2 === 0 && S[i + j] !== 'I') {
                isPattern = false;
                break;
            }
            if (j % 2 === 1 && S[i + j] !== 'O') {
                isPattern = false;
                break;
            }
        }
        
        if (isPattern) {
            count++;
        }
    }
    
    return count;
}

console.log(countPatternOccurrences(N, S));