function solution(number, k) {
    const stack = [];
    for (let i = 0; i < number.length; i++) {
        const c = number[i];
        while (k > 0 && stack.length && stack[stack.length - 1] < c) {
            stack.pop();
            k--;
        }
        stack.push(c);
    }
    if (k > 0) {
        stack.splice(stack.length - k, k);
    }
    return stack.join('');
}