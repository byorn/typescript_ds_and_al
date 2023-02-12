const lineReader = require('line-reader');



export const readFile =  async (fileName: string): Promise<string[]> => {

    return new Promise((resolve)=>{
        const lines:string[] = [];
        lineReader.eachLine(fileName, function(line:string, last:boolean) {
            lines.push(line);
            if(last){
                resolve(lines);
            }
        });
    })

}

