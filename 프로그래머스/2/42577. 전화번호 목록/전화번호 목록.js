function solution(phone_book) {
    phone_book.sort();
    // 인접한 전화번호들만 비교
    for (let i = 0; i < phone_book.length - 1; i++) {
        // 앞 번호가 뒤 번호의 접두사인지 확인
        if (phone_book[i + 1].startsWith(phone_book[i])) {
            return false; // 접두사인 경우
        }
    }
    return true; // 접두사가 없는 경우
}