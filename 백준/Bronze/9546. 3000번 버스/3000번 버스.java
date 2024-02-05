import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int t = in.nextInt();


        for (int i = 0; i < t; i++) {
            int n = in.nextInt();

            int result = 1;

            for (int j = 1; j < n; j++) {

                // result 값 갱신
                result = (result * 2) + 1;
            }
            System.out.println(result);
        }


    }
}