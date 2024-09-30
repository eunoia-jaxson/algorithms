function solution(order) {
    return Array.from(order.toString()).filter(e => e === "3" || e === "6" || e === "9").length;
}