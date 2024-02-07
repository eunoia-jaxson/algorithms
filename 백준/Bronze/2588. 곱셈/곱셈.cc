#include<stdio.h>

int main(void){
    int a = 0, b = 0;
    scanf("%d", &a);
    scanf("%d", &b);
    
    printf("%d\n", a*(b%10));
    printf("%d\n", a*((b/10)%10));
    printf("%d\n", a*(b/100));
    printf("%d\n", a*b);
    
    return 0;
}