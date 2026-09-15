#include <stdio.h>
#include <stdlib.h>
#include <time.h>
int main()
{
    srand(time(0));
    int random_number = (rand() % 100) + 1;
    int number;
    int no_of_gusses = 0;
    int score = 0;
    printf("%d\n" , random_number);
    do
    {
        printf("Guess a number(1 to 100)\n");
        scanf("%d", &number);
        if (number == random_number)
        {
            printf("correct\n");
        }
        else if (number > random_number)
        {
            printf("high\n");
        }
        else
        {
            printf("low\n");
        }
        no_of_gusses++;

    } while (number != random_number);

    printf("number of gusses you take to guess the number is %d\n ", no_of_gusses);
   
    score = 55 - (no_of_gusses * 5);

    if (score < 0)
    {
        score = 0;
    }
    printf("score =%d", score);
    return 0;
}
