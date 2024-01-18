#include <stdio.h>

int main(){
    int count = 0;
    int remainder[10];
    int data = 0;
    int flag = 0;

    for(int i=0; i<10; i++){
      remainder[i] = -1;
    }
    
    for(int i=0; i<10; i++){
        scanf("%d", &data);
        
        for(int j=0; j<=count; j++){
            if(remainder[j] == data%42){
                flag = 1;
                break;
            }
        }
        
        if(flag == 0){
            remainder[count] = data%42;
            count += 1;
        }
        else{
            flag = 0;
        }
    }

    printf("%d\n", count);
    
    return 0;
}