function solution(genres, plays) {
    let sum = new Map();
    const answer = [];
    genres.map((e, i) => sum.set(e, (sum.get(e) || 0) + plays[i]));
    sum = Array.from(sum.entries()).sort((a, b) => b[1] - a[1]);
    
    sum.forEach(e => {
        const indices = genres.reduce((acc, value, index) => {
          if (value === e[0]) acc.push(index);
          return acc;
        }, []);
        const song = indices.map(i => plays[i]);
        const max = Math.max(...song);
        
        answer.push(plays.indexOf(max));
        if (song.length > 1) {
            plays[plays.findIndex(item => item === max)] = 0;
            answer.push(plays.indexOf(Math.max(...indices.map(i => plays[i]))));
        }
    });
    
    return answer;
}