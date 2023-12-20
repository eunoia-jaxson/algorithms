import java.util.Scanner;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int N = in.nextInt();
        in.nextLine();
        int count = N;
        String[] inputs = new String[N];
        for (int i=0; i<N; i++) {
            inputs[i] = in.nextLine();
        }

        for (int i=0; i<N; i++) {
            ArrayList<Character> chars = new ArrayList<Character>();
            for (int j=0; j<inputs[i].length(); j++) {
                if (!chars.contains(inputs[i].charAt(j))) {
                    chars.add(inputs[i].charAt(j));
                }
                else if (chars.get(chars.size() - 1) == inputs[i].charAt(j)) {
                    continue;
                }
                else {
                    count -= 1;
                    break;
                }
            }
        }

        System.out.println(count);
        in.close();
    }
}