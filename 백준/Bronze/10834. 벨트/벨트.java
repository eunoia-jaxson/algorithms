import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
	
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int M = Integer.parseInt(br.readLine());
		//belt = 벨트 방향을 저장할 변수
		//beltm = 벨트가 회전하는 횟수를 저장할 변수
		int belt = 0;
		int beltm = 1;
		
		for(int i = 0; i < M; i++) {
			StringTokenizer st = new StringTokenizer(br.readLine());
			int a = Integer.parseInt(st.nextToken());
			int b = Integer.parseInt(st.nextToken());
			int s = Integer.parseInt(st.nextToken());
			
			//벨트의 모양이 주어졌을때 1이면 방향을 틀어준다.
			if(s == 1) {
				if(belt == 0) belt = 1;
				
				else if(belt == 1) belt = 0;
			}
			
			//벨트의 회전수를 공식대로 넣어준다.
			beltm = (beltm / a) * b;
		}
		//사이 공백을 두고 출력
		System.out.println(belt + " " + beltm);
	}

}