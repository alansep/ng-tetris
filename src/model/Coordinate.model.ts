export class Coordinate {
    
    constructor(x: number, y: number){
        this._x = x;
        this._y = y;
    }
    
    private _x: number;
    private _y: number;

    public get x() : number {
        return this._x;      
    }

    public get y() : number {
        return this._y;      
    }


    


}