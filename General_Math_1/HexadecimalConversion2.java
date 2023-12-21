/*
문제
10진법 수 N이 주어진다. 이 수를 B진법으로 바꿔 출력하는 프로그램을 작성하시오.

10진법을 넘어가는 진법은 숫자로 표시할 수 없는 자리가 있다. 이런 경우에는 다음과 같이 알파벳 대문자를 사용한다.

A: 10, B: 11, ..., F: 15, ..., Y: 34, Z: 35

입력
첫째 줄에 N과 B가 주어진다. (2 ≤ B ≤ 36) N은 10억보다 작거나 같은 자연수이다.

출력
첫째 줄에 10진법 수 N을 B진법으로 출력한다.
 */

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // 10진법 수 N과 B 입력
        int N = scanner.nextInt();
        int B = scanner.nextInt();

        // 10진법 수 N을 B진법으로 변환하여 출력
        String result = convertToBase(N, B);
        System.out.println(result);

        scanner.close();
    }

    // 10진법 수 N을 B진법으로 변환하는 메서드
    private static String convertToBase(int N, int B) {
        StringBuilder result = new StringBuilder();

        // N이 0이 될 때까지 B로 나누고 나머지를 구하여 문자열에 추가
        while (N > 0) {
            int remainder = N % B;
            char digit = (remainder < 10) ? (char) ('0' + remainder) : (char) ('A' + remainder - 10);
            result.insert(0, digit);
            N /= B;
        }

        return result.toString();
    }
}
