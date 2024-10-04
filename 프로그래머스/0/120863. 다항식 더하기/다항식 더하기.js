function solution(polynomial) {
    polynomial = polynomial.split(" + ").map(e => e === "x" ? "1x" : e);
    let term1 = polynomial.filter(e => e.includes("x")).reduce((acc, curr) => acc + Number(curr.slice(0, curr.length - 1)), 0) + "x";
    const term2 = polynomial.filter(e => !e.includes("x")).reduce((acc, curr) => acc + Number(curr), 0);
    if (term1 === "1x") term1 = "x";
    return term1 === "0x" ? term2.toString() : term2 === 0 ? term1 : term1 + " + " + term2;
}