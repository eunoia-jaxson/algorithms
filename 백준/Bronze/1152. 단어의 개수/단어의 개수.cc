#include <stdio.h>
#include <string.h>

int main(void){
    int count;
    char str[1000000];
    scanf("%[^\n]s", str);
    
    if(str[0] == ' '){
        if(str[strlen(str)-1] == ' '){
            count = -1;
        }
        else{
            count = 0;
        }
    }
    else{
        if(str[strlen(str)-1] == ' '){
            count = 0;
        }
        else{
            count = 1;
        }
    }
    
    for(int i=0; i<strlen(str); i++){
        if(str[i] == ' '){
            count += 1;
        }
    }
    
    printf("%d\n", count);
    
    return 0;
}