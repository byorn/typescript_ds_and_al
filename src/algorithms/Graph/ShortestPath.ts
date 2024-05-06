import singleNumber from "../../leet_code/SingleNumber";

class Point {
    public  x :number;
    public y :number;
    public steps :number;

    constructor(x :number, y: number, steps :number) {
        this.x = x;
        this.y = y;
        this.steps = steps;
    }

}

type Position = Point | undefined;

//NSEW
const directions: number[][] = [[0,-1], [0,1], [1,0], [-1, 0]];

function printMatrix(matrix: number[][]){
   console.log(matrix)
}

export default function findShortestPath(matrix: number[][], targetX :number, targetY :number, startX :number, startY :number):number {
    matrix[startX][startY] = 1;
    const currentPoint = new Point(startX, startY, 1);
   const queue: Point[] = [currentPoint];
   while(queue.length > 0){
       const point :Position = queue.shift();
      // printMatrix(matrix);
       if (targetX === point?.x && targetY === point?.y){

           return point.steps;
       }
       for (let d:number = 0; d<directions.length; d++){
           if (point) {
                   const newX = point.x + directions[d][0];
                   const newY = point.y + directions[d][1];
                   if (newX >= 0 && newX <=  matrix[0].length-1 &&
                   newY >= 0 && newY <= matrix.length - 1 && matrix[newX][newY] != 1){
                       const p = new Point(newX, newY, point.steps + 1)
                       matrix[newX][newY] = 1

                       queue.push(p);
                   }
           }

       }
   }

    return -1;

}