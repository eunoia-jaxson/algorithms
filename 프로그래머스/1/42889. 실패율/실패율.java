import java.util.HashMap;
import java.util.List;
import java.util.ArrayList;

class Solution {
    public int[] solution(int N, int[] stages) {
        HashMap<Integer, Double> fails = new HashMap<>();
        for (int i=0; i<N; i++) {
            int reach = 0;
            int fail = 0;
            for (int j=0; j<stages.length; j++) {
                if (stages[j] >= i+1) {
                    reach += 1;
                }
                if (stages[j] == i+1) {
                    fail += 1;
                }
            }
            
            if (reach == 0 || fail == 0) {
                fails.put(i+1, 0.0);
            } else {
                fails.put(i+1, (double) fail / reach);
            }
        }
        
        List<Integer> answer = new ArrayList<>(fails.keySet());
        answer.sort((o1, o2) -> Double.compare(fails.get(o2), fails.get(o1)));
        
        return answer.stream().mapToInt(Integer::intValue).toArray();
    }
}