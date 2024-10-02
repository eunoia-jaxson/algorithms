function solution(order) {
    return order.map(e => e.includes("latte") ? 5000 : 4500).reduce((acc, curr) => acc + curr);
}