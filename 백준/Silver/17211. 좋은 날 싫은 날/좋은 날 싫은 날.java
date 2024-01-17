import java.util.Scanner;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int N = in.nextInt();
        double mood = in.nextInt();
        double prob0 = in.nextDouble();
        double prob1 = in.nextDouble();
        double prob2 = in.nextDouble();
        double prob3 = in.nextDouble();
        
        mood = (1-mood) * 1000;
        for (int i=0; i<N; i++) {
            mood = mood * prob0 + (1000-mood) * prob2;
        }
        
        System.out.println(String.format("%.0f", mood));
        System.out.println(String.format("%.0f", 1000-mood));
    }
}