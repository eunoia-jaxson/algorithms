import java.util.Arrays;
import java.util.Collections;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        Integer[] arr = new Integer[n];
        for (int i = 0; i < n; i++) {
            arr[i] =sc.nextInt();
        }
        Arrays.sort(arr, Collections.reverseOrder());

        int answer = 0;
        for (int i = 0; i < n; i++) {
            if(arr[i] * (i+1) > answer) answer = arr[i] * (i+1); //최소값 * 로프의수가 answer보다 크다면 갱신
        }


        System.out.println(answer);
    }

}