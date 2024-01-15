import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int max = 0;
        int current = 0;
        for (int i=0; i<4; i++) {
            int off = in.nextInt();
            current -= off;
            int on = in.nextInt();
            current += on;
            
            if (max < current) {
                max = current;
            }
        }
        
        System.out.println(max);
    }
}