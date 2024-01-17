import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        long N = in.nextLong();
        int door = in.nextInt();
        
        if (N > 5) {
            System.out.println("Love is open door");
        } else {
            for (int i=1; i<N; i++) {
                if (door == 1) {
                    System.out.println(0);
                    door = 0;
                } else {
                    System.out.println(1);
                    door = 1;
                }
            }
        }
    }
}