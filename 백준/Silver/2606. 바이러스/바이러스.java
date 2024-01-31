import java.util.*;

public class Main {
    static int comCount, connCount;
	static int[][] computer;
	static boolean[] check;
	static int count;

	static void BFS(int x) {
		Queue<Integer> queue = new LinkedList<Integer>();
		queue.add(x);

		while (!queue.isEmpty()) {
			x = queue.poll();
			check[x] = true;
			for (int i=1; i<comCount+1; i++) {
				if (!check[i] && computer[x][i] == 1) {
					check[i] = true;
					queue.add(i);
					count += 1;
				}
			}
		}
	}

	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		comCount = in.nextInt();
		connCount = in.nextInt();
		computer = new int[comCount + 1][comCount + 1];
		check = new boolean[comCount + 1];

		for (int i=0; i<connCount; i++) {
			int a1 = in.nextInt();
			int a2 = in.nextInt();
			computer[a1][a2] = computer[a2][a1] = 1;
		}
        
		BFS(1);
		System.out.println(count);
	}
}