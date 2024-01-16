import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int N = in.nextInt();
        int Y = 0, M = 0;
        for (int i=0; i<N; i++) {
            int time = in.nextInt();
            Y += (time / 30 + 1) * 10;
            M += (time / 60 + 1) * 15;
        }
        
        if (Y < M) {
            System.out.println("Y " + Y);
        }
        else if (M < Y) {
            System.out.println("M " + M);
        }
        else {
            System.out.println("Y M " + M);
        }
    }
}