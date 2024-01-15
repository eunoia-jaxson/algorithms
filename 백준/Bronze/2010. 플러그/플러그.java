import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int N = in.nextInt();
        int count = 1;
        for (int i=0; i<N; i++) {
            count -= 1;
            count += in.nextInt();
        }
        System.out.println(count);
    }
}