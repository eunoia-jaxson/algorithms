/*
문제
인하대학교 컴퓨터공학과를 졸업하기 위해서는, 전공평점이 3.3 이상이거나 졸업고사를 통과해야 한다. 그런데 아뿔싸, 치훈이는 깜빡하고 졸업고사를 응시하지 않았다는 사실을 깨달았다!

치훈이의 전공평점을 계산해주는 프로그램을 작성해보자.

전공평점은 전공과목별 (학점 × 과목평점)의 합을 학점의 총합으로 나눈 값이다.

인하대학교 컴퓨터공학과의 등급에 따른 과목평점은 다음 표와 같다.

A+	4.5
A0	4.0
B+	3.5
B0	3.0
C+	2.5
C0	2.0
D+	1.5
D0	1.0
F	0.0
P/F 과목의 경우 등급이 P또는 F로 표시되는데, 등급이 P인 과목은 계산에서 제외해야 한다.

과연 치훈이는 무사히 졸업할 수 있을까?

입력
20줄에 걸쳐 치훈이가 수강한 전공과목의 과목명, 학점, 등급이 공백으로 구분되어 주어진다.

출력
치훈이의 전공평점을 출력한다.

정답과의 절대오차 또는 상대오차가 10^{-4} 이하이면 정답으로 인정한다.
 */

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // 전공평점 계산을 위한 변수 초기화
        double totalCredits = 0.0;
        double totalGradePoints = 0.0;

        // 전공과목 수 입력
        int numCourses = 20; // 주어진 제한에 따라 과목 수를 20으로 가정

        // 각 과목에 대한 정보 입력 및 평점 계산
        for (int i = 0; i < numCourses; i++) {
            String courseName = scanner.next();
            double credits = scanner.nextDouble();
            String grade = scanner.next();

            // P/F 과목은 계산에서 제외
            if (!grade.equals("P")) {
                totalCredits += credits;
                totalGradePoints += calculateGradePoints(grade) * credits;
            }
        }

        // 전공평점 계산
        double graduationScore = totalGradePoints / totalCredits;

        // 전공평점 출력
        System.out.println(graduationScore);

        scanner.close();
    }

    // 등급에 따른 과목평점 계산 메서드
    private static double calculateGradePoints(String grade) {
        switch (grade) {
            case "A+":
                return 4.5;
            case "A0":
                return 4.0;
            case "B+":
                return 3.5;
            case "B0":
                return 3.0;
            case "C+":
                return 2.5;
            case "C0":
                return 2.0;
            case "D+":
                return 1.5;
            case "D0":
                return 1.0;
            case "F":
                return 0.0;
            default:
                return 0.0;
        }
    }
}