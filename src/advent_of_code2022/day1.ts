export const getElfThatCarriesMaxiumCalories = (reindeers: string[]):number => {

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