import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        String input = in.nextLine();
        String result = "";
        
        for(int i=0; i<input.length(); i++)
        {
            char temp = input.charAt(i);
            temp -= 3;
            
            if(temp<'A')
            {
                temp += 26;
            }
            
            result += temp;
        }
        
        System.out.println(result);
        in.close();
    }
}