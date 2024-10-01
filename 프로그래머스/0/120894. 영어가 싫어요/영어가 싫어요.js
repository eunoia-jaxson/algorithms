function solution(numbers) {
    const string = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    
    string.forEach((e, i) => {
       numbers = numbers.replaceAll(e, i); 
    });
    return Number(numbers);
}