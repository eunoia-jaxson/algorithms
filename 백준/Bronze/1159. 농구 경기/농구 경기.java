import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] arr = new int[26];

        int n = scanner.nextInt();

        for (int i = 0; i < n; i++) {
            String name = scanner.next();
            int ch = name.charAt(0) - 97; // 소문자 a = 97
            arr[ch]++;
        }
        StringBuilder sb = new StringBuilder();

        for (int i = 0; i < arr.length; i++) {
            if (arr[i] >= 5) {
                sb.append((char) (i + 97));
            }
        }
        if (sb.length() == 0) {
            System.out.print("PREDAJA");
        } else {
            System.out.print(sb);
        }
    }
}