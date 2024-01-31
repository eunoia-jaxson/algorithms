import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int nC = in.nextInt();
        int lC = in.nextInt();
        int sNN = in.nextInt();
        // nC = nodeCount
        // lC = lineCount
        // sNN = startNodeNumber

        Node[] nodes = new Node[nC+1];
        for (int i=1; i<=nC; i++) {
            nodes[i] = new Node(i);
        }
        
        for (int i=0; i<lC; i++) {
            int sN = in.nextInt();
            int eN = in.nextInt();
            // sN = startNode
            // eN = endNode
            nodes[sN].addNode(nodes[eN]);
            nodes[eN].addNode(nodes[sN]);
        }
        
        for (Node n : nodes) {
            if (n != null) {
                n.getNodeList().sort(new Com());
            }
        }
        
        DFS(nodes, sNN);
        System.out.println();
        reset(nodes);
        BFS(nodes[sNN]);
        in.close();
    }
    
    static void reset(Node[] nodes){
        for (Node v : nodes) {
            if (v != null) {
                v.setVisit(false);
            }
        }
    }

    static void DFS(Node[] nodes, int sNN){
        Stack<Node> stack = new Stack<>();
        Node n = nodes[sNN];
        n.setVisit(true);
        System.out.print(n.getValue());
        stack.push(n);
        while(!stack.empty()){
            Node tN = stack.peek();
            boolean test = false;
            // tN = topNode
            for(Node sN : tN.getNodeList()){
                // sN = sideNode (인접 노드)
                if(!sN.getVisit()){
                    sN.setVisit(true);
                    System.out.print(" " + sN.getValue());
                    stack.push(sN);
                    test = true;
                    break;
                }
            }
            if(!test) stack.pop();
        }
    }
    
    static void BFS(Node node){
        Queue<Node> queue = new LinkedList<>();
        node.setVisit(true);
        queue.add(node);
        System.out.print(node.getValue());

        while(!queue.isEmpty()){
            Node v = queue.remove();
            List<Node> neigh = v.getNodeList();

            for(Node w : neigh){
                if(!w.getVisit()){
                    System.out.print(" " + w.getValue());
                    w.setVisit(true);
                    queue.add(w);
                }
            }
        }
    }
}

class Com implements Comparator<Node>{
    @Override
    public int compare(Node o1, Node o2) {
        return Integer.compare(o1.getValue(), o2.getValue());
    }
}

class Node {
    private final int value;
    private boolean visit;
    private List<Node> nodeList;

    public Node(int value) {
        visit = false;
        nodeList = new ArrayList<>();
        this.value = value;
    }

    public void addNode(Node node) {
        nodeList.add(node);
    }

    public int getValue() {
        return value;
    }

    public boolean getVisit() {
        return visit;
    }

    public void setVisit(boolean visit) {
        this.visit = visit;
    }

    public List<Node> getNodeList() {
        return nodeList;
    }
    @Override
    public String toString() {
        return "" + value;
    }
}