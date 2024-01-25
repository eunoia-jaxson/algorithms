import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(bf.readLine());
        int N = Integer.parseInt(st.nextToken());
        int a = Integer.parseInt(st.nextToken()) - 1;
        int b = Integer.parseInt(st.nextToken()) - 1;
        int[][] X = new int[N][N];
        boolean happy = true;
        
        for (int i=0; i<N; i++) {
            StringTokenizer str = new StringTokenizer(bf.readLine());
            for (int j=0; j<N; j++) {
                X[i][j] = Integer.parseInt(str.nextToken());
            }
        }
        
        for (int i=0; i<N; i++) {
            if (X[a][i] > X[a][b] || X[i][b] > X[a][b]) {
                happy = false;
                break;
            }
        }
        
        System.out.println(happy ? "HAPPY" : "ANGRY");
    }
}