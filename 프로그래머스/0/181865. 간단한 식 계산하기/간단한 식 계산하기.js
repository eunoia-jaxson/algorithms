function solution(binomial) {
    binomial = binomial.split(" ");
    switch (binomial[1]) {
        case "+":
            return Number(binomial[0]) + Number(binomial[2]);
        case "-":
            return Number(binomial[0]) - Number(binomial[2]);
        case "*":
            return Number(binomial[0]) * Number(binomial[2]);
    }
}