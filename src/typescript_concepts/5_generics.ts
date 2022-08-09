export class MyGeneric<T>{

    constructor(public myData:T) {
    }

    printValueOfT( ){
        console.log(this.myData);
    }
}

interface Drivable {
    drive():void
}


export function driveAllObjects<T extends Drivable>(arr: T[]):void {
    arr.forEach((a:T)=>{
        a.drive();
    })
}
