/*
For example, suppose the Elves finish writing their items' Calories and end up with the following list:

1000
2000
3000

4000

5000
6000

7000
8000
9000

10000
This list represents the Calories of the food carried by five Elves:

The first Elf is carrying food with 1000, 2000, and 3000 Calories, a total of 6000 Calories.
The second Elf is carrying one food item with 4000 Calories.
The third Elf is carrying food with 5000 and 6000 Calories, a total of 11000 Calories.
The fourth Elf is carrying food with 7000, 8000, and 9000 Calories, a total of 24000 Calories.
The fifth Elf is carrying one food item with 10000 Calories.
In case the Elves get hungry and need extra snacks, they need to know which Elf to ask: they'd like to know how many Calories are being carried by the Elf carrying the most Calories. In the example above, this is 24000
 */
export const getMaxInGroup = (reindeers: string[]):number => {

    let maximumCalories:number = 0;
    let currentTotalReindeerCalories: number = 0;
    let currentReindeer: number = 1;
    for ( let i = 0; i < reindeers.length; i++){
        if(reindeers[i] === ''){
            if (currentTotalReindeerCalories > maximumCalories ){
                maximumCalories = currentTotalReindeerCalories;
            }
            currentTotalReindeerCalories = 0;
            currentReindeer++;
        } else {
            currentTotalReindeerCalories += parseInt(reindeers[i]);
            if ( i === reindeers.length - 1) {
                if (currentTotalReindeerCalories > maximumCalories ){
                    maximumCalories  = currentTotalReindeerCalories;
                }
            }

        }
    }

    return maximumCalories;
}