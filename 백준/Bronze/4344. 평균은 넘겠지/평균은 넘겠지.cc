#include <stdio.h>

int main(void){
    int C = 0, N = 0;
    float score[1000];
    float total = 0;
    float average = 0;
    int count = 0;
    float rate = 0;
    
    scanf("%d", &C);
    for(int i=0; i<C; i++){
        scanf("%d", &N);
        for(int j=0; j<N; j++){
            scanf("%f", &score[j]);
            total += score[j];
        }
        average = total / N;
        
        for(int j=0; j<N; j++){
            if(score[j] > average){
                count += 1;
            }
        }
        rate = (float)count / N * 100;
        
        printf("%.3f%%\n", rate);
        total = 0;
        count = 0;
    }
    
    return 0;
}