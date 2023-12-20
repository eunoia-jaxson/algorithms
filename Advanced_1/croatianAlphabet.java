import java.util.Scanner;

public class CroatianAlphabet {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // 단어 입력
        System.out.print("단어를 입력하세요: ");
        String word = scanner.nextLine();

        // 크로아티아 알파벳 변환 및 개수 세기
        int count = 0;
        for (int i = 0; i < word.length(); i++) {
            char currentChar = word.charAt(i);

            if (currentChar == 'c' && i < word.length() - 1) {
                char nextChar = word.charAt(i + 1);
                if (nextChar == '=' || nextChar == '-') {
                    i++; // 'c=' 또는 'c-'를 하나로 처리
                }
            } else if ((currentChar == 's' || currentChar == 'z') && i < word.length() - 1) {
                char nextChar = word.charAt(i + 1);
                if (nextChar == '=') {
                    i++; // 's=' 또는 'z='를 하나로 처리
                }
            } else if (currentChar == 'd' && i < word.length() - 2) {
                char nextChar1 = word.charAt(i + 1);
                char nextChar2 = word.charAt(i + 2);
                if (nextChar1 == 'z' && nextChar2 == '=') {
                    i += 2; // 'dz='를 하나로 처리
                } else if (nextChar1 == '-') {
                    i++; // 'd-'를 하나로 처리
                }
            } else if ((currentChar == 'l' || currentChar == 'n') && i < word.length() - 1) {
                char nextChar = word.charAt(i + 1);
                if (nextChar == 'j') {
                    i++; // 'lj' 또는 'nj'를 하나로 처리
                }
            }

            // 크로아티아 알파벳이 아닌 경우 개수 증가
            count++;
        }

        // 결과 출력
        System.out.println("크로아티아 알파벳 개수: " + count);

        scanner.close();
    }
}