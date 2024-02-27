import java.util.Scanner;

public class Main {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);

		int t = sc.nextInt();

		int result = 0;
		int minX = 10000;
		int maxY = -10000;
		int minY = 10000;
		int maxX = -10000;

		if (t == 1) { // 예외처리
			System.out.println(0);
		} 
		else {
			while (t-- > 0) { // 테스트케이스
				int x = 0, y = 0;

				x = sc.nextInt();
				y = sc.nextInt();

				if (maxX <= x) {
					maxX = x;
				}
				if (maxY <= y) {
					maxY = y;
				}
				if (minX >= x) {
					minX = x;
				}
				if (minY >= y) {
					minY = y;
				}

			}

			int X = maxX - minX;
			int Y = maxY - minY;

			result = X * Y;

			System.out.println(result);
		}

		sc.close();

	}

}