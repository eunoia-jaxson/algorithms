/*
문제
B진법 수 N이 주어진다. 이 수를 10진법으로 바꿔 출력하는 프로그램을 작성하시오.

10진법을 넘어가는 진법은 숫자로 표시할 수 없는 자리가 있다. 이런 경우에는 다음과 같이 알파벳 대문자를 사용한다.

A: 10, B: 11, ..., F: 15, ..., Y: 34, Z: 35

입력
첫째 줄에 N과 B가 주어진다. (2 ≤ B ≤ 36)

B진법 수 N을 10진법으로 바꾸면, 항상 10억보다 작거나 같다.

출력
첫째 줄에 B진법 수 N을 10진법으로 출력한다.
 */

import java.util.Scanner;

public class BaseConversion {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // B진법 수 N과 B 입력
        String N = scanner.next();
        int B = scanner.nextInt();

        // B진법 수 N을 10진법으로 변환
        int decimalValue = convertToDecimal(N, B);

        // 결과 출력
        System.out.println(decimalValue);

        scanner.close();
    }

    // B진법 수 N을 10진법으로 변환하는 메서드
    private static int convertToDecimal(String N, int B) {
        int decimalValue = 0;

        // 문자열을 뒤에서부터 시작하여 각 자리의 값을 10진법으로 변환하여 더하기
        for (int i = N.length() - 1, power = 0; i >= 0; i--, power++) {
            char digit = N.charAt(i);
            int value = Character.isDigit(digit) ? digit - '0' : digit - 'A' + 10;
            decimalValue += value * Math.pow(B, power);
        }

        return decimalValue;
    }
}
