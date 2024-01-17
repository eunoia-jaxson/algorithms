import java.util.Scanner;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int not1 = 0;
        int not2 = 0;
        int[] height = new int[9];
        for (int i=0; i<9; i++) {
            height[i] = in.nextInt();
        }
        
        for (int i=0; i<8; i++) {
            for (int j=i+1; j<9; j++) {
                int sum = 100;
                for (int k=0; k<9; k++) {
                    if (k == i || k == j) {
                        continue;
                    }
                    else {
                        sum -= height[k];
                    }
                }
                if (sum == 0) {
                    not1 = height[i];
                    not2 = height[j];
                    break;
                }
            }
        }
        
        Arrays.sort(height);
        for (int i=0; i<9; i++) {
            if (height[i] != not1 && height[i] != not2) {
                System.out.println(height[i]);
            }
        }
    }
}