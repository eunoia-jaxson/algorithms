import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int N = in.nextInt();
        int M = in.nextInt();
        in.nextLine();
        String[] guards = new String[N];
        int rowCount = N;
        int colCount = M;
        for (int i=0; i<N; i++) {
            guards[i] = in.nextLine();
        }
        
        for (int i=0; i<N; i++) {
            for (int j=0; j<M; j++) {
                if (guards[i].charAt(j) == 'X') {
                    rowCount -= 1;
                    break;
                }
            }
        }
        
        for (int i=0; i<M; i++) {
            for (int j=0; j<N; j++) {
                if (guards[j].charAt(i) == 'X') {
                    colCount -= 1;
                    break;
                }
            }
        }
        
        System.out.println(Math.max(rowCount, colCount));
        in.close();
    }
}