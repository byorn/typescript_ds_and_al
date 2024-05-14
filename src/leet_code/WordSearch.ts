//https://leetcode.com/problems/word-search/description/?envType=study-plan-v2&envId=top-interview-150
class Point {
   public x: number;
   public y: number;
   public word:string;
   constructor(x: number, y: number, word:string) {
      this.x = x;
      this.y = y;
      this.word = word;
   }
}
const visitedMap = new Map();
//rltb
const Directions: number[][] = [[0,1],[0,-1],[-1,0],[1,0]];
export default function exist(board:string[][], word:string):boolean{
  
   let wordFound:boolean  = false;

      const startLetter = word[0];

      const stack:Point[] = [];
      const cordinates:number[][] = findLetter(board, startLetter );
      // found letter
      if (cordinates.length > 0) {
         for (let c of cordinates) {
            console.log(c[0], c[1]);
            console.log(visitedMap);
            stack.push(new Point(c[0], c[1], startLetter));

            while (stack.length > 0) {
               const pointPopped = stack.pop();
               if (pointPopped) {

                  if (pointPopped.word === word) {
                     wordFound = true;
                     return wordFound;
                  }

                  for (let d of Directions) {
                     const newRow = pointPopped.x + d[0];
                     const newCol = pointPopped.y + d[1]

                     if (newRow >= 0 && newRow < board.length && newCol >= 0 && newCol < board[0].length) {
                        const newString = pointPopped.word + board[newRow][newCol]
                        if (word.indexOf(newString) >= 0) {
                           stack.push(new Point(newRow, newCol, newString));
                        }
                     }
                  }
               }
            }
         }

      }



   return wordFound;
}

function findLetter(board:string[][], letter:string):number[][]{
   let cordinates:number[][] = [];
   for(let r=0; r < board.length; r++){
      for (let c=0; c<board[r].length; c++){
         if (letter === board[r][c] && !visitedMap.has(`${r}${c}`)){
            cordinates.push([r,c]);
            visitedMap.set(`${r}${c}`, true);
         }
      }
   }
   return cordinates;
}
