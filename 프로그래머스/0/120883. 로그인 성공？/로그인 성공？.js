function solution(id_pw, db) {
    const id = db.map(e => e[0]);
    const pw = db.map(e => e[1]);
    
    if (id.indexOf(id_pw[0]) !== -1 && id_pw[1] === pw[id.indexOf(id_pw[0])]) return "login";
    else if (id.indexOf(id_pw[0]) !== -1 && id_pw[1] !== pw[id.indexOf(id_pw[0])]) return "wrong pw";
    else return "fail";
}