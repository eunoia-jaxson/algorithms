import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		String string = scan.next();
		
		int oneCount = 0;	//전부 1로 바뀔때
		int zeroCount = 0;	//전부0으로 바뀔때
		
		if(string.charAt(0) == '1')
			oneCount++;
		else
			zeroCount++;

		for(int i = 1; i < string.length(); i++) {
			if(string.charAt(i) != string.charAt(i - 1)){
				if(string.charAt(i) == '1')	oneCount++;
				else	zeroCount++;
			}
		}
		System.out.println(Math.min(oneCount, zeroCount));
		scan.close();
	}
}