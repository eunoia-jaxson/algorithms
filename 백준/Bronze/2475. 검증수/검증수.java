import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int first = in.nextInt();
        int second = in.nextInt();
        int third = in.nextInt();
        int fourth = in.nextInt();
        int fifth = in.nextInt();
        
        int sum = (first * first) + (second * second) + (third * third) + (fourth * fourth) + (fifth * fifth);
        System.out.println(sum % 10);
    }
}