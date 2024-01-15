import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int x1 = in.nextInt();
        int y1 = in.nextInt();
        int x2 = in.nextInt();
        int y2 = in.nextInt();
        int x3 = in.nextInt();
        int y3 = in.nextInt();
        
        if (x1 == x2) {
            System.out.print(x3 + " ");
        } else if (x1 == x3) {
            System.out.print(x2 + " ");
        } else {
            System.out.print(x1 + " ");
        }
        
        if (y1 == y2) {
            System.out.println(y3);
        } else if (y1 == y3) {
            System.out.println(y2);
        } else {
            System.out.println(y1);
        }
    }
}