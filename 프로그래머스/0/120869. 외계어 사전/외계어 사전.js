function solution(spell, dic) {
    spell.forEach(e => {
        dic = dic.filter(elem => elem.includes(e));
    });
    return dic.length ? 1 : 2;
}