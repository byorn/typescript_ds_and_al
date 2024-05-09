//SSS
export default function findReverseShortestPath(path :string):string{

    let grid: number[][] = [];

   populateGrid(grid);

    let currentX: number=0;
    let currentY:number=0;
    for (let i = 0; i < path.length; i++) {
        const direction = moveDirection(path[i]);
        currentX = currentX + direction[0];
        currentY = currentY + direction[1];
        grid[currentX][currentY] = 1;
    }

    return findShortestPath(grid, currentX, currentY);
}

class Point{
    public x:number;
    public y:number;
    public direction: string;
    constructor(x:number, y:number, direction:string){
        this.x = x;
        this.y = y;
        this.direction = direction;
    }
}

function findShortestPath(grid :number[][], startX:number, startY:number):string{
    const queue = [new Point(startX, startY, ".")];

    while (queue.length > 0){
        const point: Point | undefined = queue.shift();

        if (point){
            if (point.x === 0 && point.y === 0){
                return point.direction;
            }
        }

        const map = new Map<string, number[]>();
        map.set("E", [0, 1]);
        map.set("W", [0, -1]);
        map.set("S", [1, 0]);
        map.set("N", [-1,0]);

        map.forEach((value: number[], key: string) => {
            if (point) {
                let newX = point.x + value[0];
                let newY = point.y + value[1];
                const direction  = key;
                if (newX >= 0 && newX < grid[0].length  && newY >= 0 && newY < grid.length  && grid[newX][newY] !== 1) {
                    grid[newX][newY] = 1;
                    queue.push(new Point(newX, newY, point.direction+direction));
                }
            }

        });

    }
    return "NOT FOUND";
}

function moveDirection(direction : string):number[]{
    const map: { [key: string]: number[]} = {
        "E": [0, 1],
        "W": [0, -1],
        "S": [1, 0],
        "N": [-1,0]
    }

    return map[direction];
}

function populateGrid(grid: number[][]){
    for (let i = 0; i < 10; i++) {
        const row : number[] = []
        for (let j = 0; j < 10; j++) {
            row.push(0);
        }
        grid.push(row)
    }
    return grid;
}