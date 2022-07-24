export class MyGeneric<T>{

    constructor(public myData:T) {
    }

    printValueOfT( ){
        console.log(this.myData);
    }
}
