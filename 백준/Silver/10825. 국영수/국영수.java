import java.util.Scanner;
import java.util.ArrayList;
import java.util.Comparator;

public class Main {
    static class Student{
        String name;
        int kor;
        int eng;
        int math;

        public Student(String name, int kor, int eng, int math) {
            this.name = name;
            this.kor = kor;
            this.eng = eng;
            this.math = math;
        }
    }
    
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        ArrayList<Student> list = new ArrayList<>();
        int N = in.nextInt();
        
        for (int i=0; i<N; i++) {
            String name = in.next();
            int kor = in.nextInt();
            int eng = in.nextInt();
            int math = in.nextInt();
            
            list.add(new Student(name, kor, eng, math));
        }
        
        list.sort(new Comparator<Student>() {
            @Override
            public int compare(Student s1, Student s2) {
                if (s1.kor == s2.kor) {
                    if (s1.eng == s2.eng) {
                        if (s1.math == s2.math) {
                            return s1.name.compareTo(s2.name);
                        }
                        return s2.math - s1.math;
                    }
                    return s1.eng - s2.eng;
                }
                return s2.kor - s1.kor;
            }
        });
        
        for (int i=0; i<N; i++) {
            System.out.println(list.get(i).name);
        }
    }
}