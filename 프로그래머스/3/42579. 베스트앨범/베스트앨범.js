function solution(genres, plays) {
    let sum = new Map();
    const answer = [];
    let songs = genres.map((e, i) => {
        sum.set(e, (sum.get(e) || 0) + plays[i]);
        return {
            genre: e,
            count: plays[i]
        };
    });
    sum = Array.from(sum.entries()).sort((a, b) => b[1] - a[1]);
    sum.forEach(e => {
        const song = songs.filter(item => item.genre === e[0]).map(item => item.count);
        answer.push(plays.indexOf(Math.max(...song)));
        if (song.length > 1) {
            songs[songs.findIndex(item => item.count === Math.max(...song))].count = 0;
            plays[plays.findIndex(item => item === Math.max(...song))] = 0;
            answer.push(plays.indexOf(Math.max(...songs.filter(item => item.genre === e[0]).map(item => item.count))));
            
        }
    });
    return answer;
}