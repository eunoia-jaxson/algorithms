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