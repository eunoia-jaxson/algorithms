import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {

        // 노는게 제일 좋았던 수현이의 연립방정식 대신 풀어주는 문제

        // 1. 테스트케이스 int 6개를 받아온다.
        // 2. ax + by = c
        // 3. dx + ey = f
        // 4. y 먼저 구하고
        // 5. x 구한다.

        Scanner sc = new Scanner(System.in);

        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();
        int d = sc.nextInt();
        int e = sc.nextInt();
        int f = sc.nextInt();

        for (int x = -999; x <= 999; x++) {
            for (int y = -999; y <= 999; y++) {
                if ((a * x) + (b * y) == c && (d * x) + ( e * y) == f){
                    System.out.println(x + " " + y);
                }
            }
        }


    }
}