import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int max = 0;
        int id = 0;
        for (int i=0; i<5; i++) {
            int score = 0;
            for (int j=0; j<4; j++) {
                score += in.nextInt();
            }
            if (max < score) {
                max = score;
                id = i + 1;
            }
        }
        System.out.println(id + " " + max);
    }
}