import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Stack;
import java.util.StringTokenizer;

public class Main {

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); // 선언
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out)); // 선언

		int N = Integer.parseInt(br.readLine()); //확인할 건수 받아오기
		
		for(int i = 0; i < N; i++) { //건수만큼 반복
			String numSet = br.readLine();
			String reverse = "";
			String check = null;
            
			for(int j = numSet.length()-1; j>=0; j--) { //뒤집은 값 생성
				reverse = reverse+numSet.charAt(j);
			}
            
			int sum = Integer.parseInt(numSet)+Integer.parseInt(reverse); // 입력값 + 뒤집은 값
			String sumSet = Integer.toString(sum); // 문자열로 변환
			
			for(int j = 0; j<(sumSet.length()/2); j++) { //중간까지만 검사
				char left =sumSet.charAt(j);
				char right =sumSet.charAt(sumSet.length()-j-1);
				
				if(left!=right) { // 대칭 검사
					check = "PASS";
					break;
				}
			}
			if(check==null)bw.write("YES\n"); //대칭이라면
			else bw.write("NO\n");            //대칭이 아니라면
		}
		
		bw.close();
		br.close();
	}
}