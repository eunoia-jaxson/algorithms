#include <stdio.h>
#include <string.h>

int main(void){
    int amount = 0;
    scanf("%d", &amount);
    
    char result[80];
    
    for(int i=0; i<amount; i++){
        int continuous = 0;
        int score = 0;
        scanf("%s", result);
        
        for(int j=0; j<strlen(result); j++){
            if(result[j] == 'O'){
                continuous += 1;
                score += continuous;
            }
            else{
                continuous = 0;
            }
        }
        
        printf("%d\n", score);
    }
    
    return 0;
}