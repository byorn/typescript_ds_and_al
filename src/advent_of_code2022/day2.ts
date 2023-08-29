/*
For example, suppose you were given the following strategy guide:

A Y
B X
C Z
This strategy guide predicts and recommends the following:

In the first round, your opponent will choose Rock (A), and you should choose Paper (Y). This ends in a win for you with a score of 8 (2 because you chose Paper + 6 because you won).
In the second round, your opponent will choose Paper (B), and you should choose Rock (X). This ends in a loss for you with a score of 1 (1 + 0).
The third round is a draw with both players choosing Scissors, giving you a score of 3 + 3 = 6.
In this example, if you were to follow the strategy guide, you would get a total score of 15 (8 + 1 + 6).
 */

/*
X - 1
Y - 2
Z - 3

won - 6
draw - 3
lose - 0
 */

const pointsGameResult: {[index:string]:number} = {
    W: 6,
    D: 3,
    L: 0
}
const pointsOptionSelected: {[index:string]:number} = {
    X: 1,
    Y: 2,
    Z: 3
}

const matchCombinations: {[index:string]:string} = {
    AX: "D",
    AY: "W",
    AZ: "L",
    BX: "L",
    BY: "D",
    BZ: "W",
    CX: "W",
    CY: "L",
    CZ: "D"
}

const part2MatchCombinations: {[index:string]:string[]} = {
    AX: ["L", "Z"],
    AY: ["D", "X"],
    AZ: ["W", "Y"],
    BX: ["L", "X"],
    BY: ["D", "Y"],
    BZ: ["W", "Z"],
    CX: ["L", "Y"],
    CY: ["D", "Z"],
    CZ: ["W", "X"]
}
export const getTotalScore = (scores: string[]):number => {



    let playedHandTotalScore: number = 0;
    let outcomeTotalScore: number = 0;
    scores.forEach(score => {

        const play: string = score.replace(" ", "");
        const result: number[] = getOutComeAndHandPlayedPoints(play);
        outcomeTotalScore+=result[0]
        playedHandTotalScore+=result[1]
    })

    return outcomeTotalScore+playedHandTotalScore;
}

const getOutComeAndHandPlayedPoints  = (play:string):number[]=>{
    let hand: number = 0;
    let outcome: number = 0;
    const result: string = matchCombinations[play];
    outcome=pointsGameResult[result]
    hand=pointsOptionSelected[play.substring(1)]
    return [outcome, hand];
}

export const getTotalScorePart2 = (scores: string[]):number => {


    let playedHandTotalScore: number = 0;
    let outcomeTotalScore: number = 0;
    scores.forEach(score => {

        let play: string = score.replace(" ", "");
        play = play.substring(0,1) + part2MatchCombinations[play][1]
        const result: number[] = getOutComeAndHandPlayedPoints(play);
        outcomeTotalScore+=result[0]
        playedHandTotalScore+=result[1]
    })

    return outcomeTotalScore+playedHandTotalScore;
}