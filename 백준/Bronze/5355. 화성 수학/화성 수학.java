import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int T = in.nextInt();
        for (int i=0; i<T; i++) {
            double num = in.nextDouble();
            String[] operators = in.nextLine().split(" ");
            
            for (String operator : operators) {
                if (operator.equals("@")) {
                    num *= 3;
                }
                else if (operator.equals("%")) {
                    num += 5;
                }
                else if (operator.equals("#")) {
                    num -= 7;
                }
            }
            
            System.out.println(String.format("%.2f", num));
        }
    }
}