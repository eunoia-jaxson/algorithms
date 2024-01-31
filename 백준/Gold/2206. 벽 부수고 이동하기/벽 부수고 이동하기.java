import java.util.*;

public class Main {
	static int n, m;
	static int[][] data;
	static int[][][] visited;
	static int[] dx = {-1, 1, 0, 0};
	static int[] dy = {0, 0, -1, 1};
	
	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		n = in.nextInt();
		m = in.nextInt();
		data = new int[n][m];
		visited = new int[n][m][2];
		for (int i=0; i<n; i++) {
			String st = in.next();
			for (int j=0; j<m; j++) {
				data[i][j] = Character.getNumericValue(st.charAt(j));
			}
		}
		
		visited[0][0][0] = 1;
		
		System.out.println(BFS(0, 0, 0));
        in.close();
	}
	
	public static int BFS(int a, int b, int c) {
		Queue<int[]> q = new LinkedList<>();
		int[] temp = {a, b, c};
		q.add(temp);
		
		while (!q.isEmpty()) {
			int[] pop = q.remove();
			int x = pop[0];
			int y = pop[1];
			int z = pop[2];
			
			if (x == n-1 && y == m-1) {
				return visited[x][y][z];
			}
			
			for (int d=0; d<4; d++) {
				int nx = x + dx[d];
				int ny = y + dy[d];
				if (0 > nx || nx >= n || 0 > ny || ny >= m) 
					continue;
				
				if (data[nx][ny] == 1 && z == 0) {
					visited[nx][ny][1] = visited[x][y][0] + 1;
					int[] push = {nx, ny, 1};
					q.add(push);
				} else if (data[nx][ny] == 0 && visited[nx][ny][z] == 0) {
					visited[nx][ny][z] = visited[x][y][z] + 1;
					int[] push = {nx, ny, z};
					q.add(push);
				}
			}
		}
		
		return -1;
	}
}