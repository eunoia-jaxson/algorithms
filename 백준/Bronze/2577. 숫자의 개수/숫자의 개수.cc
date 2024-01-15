#include <stdio.h>

int main(void){
    int count[10] = {0};
    int a = 0, b = 0, c = 0;
    int result = 0;
    scanf("%d", &a);
    scanf("%d", &b);
    scanf("%d", &c);
    
    result = a * b * c;
    
    while(result != 0){
        count[result%10] += 1;
        result /= 10;
    }
    
    for(int i=0; i<10; i++){
        printf("%d\n", count[i]);
    }
    
    return 0;
}