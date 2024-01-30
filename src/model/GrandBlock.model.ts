import { Coordinate } from "./Coordinate.model";
import { GrandBlockType } from "./GrandBlockType.model";
import { GrandBlockPhase } from "./enums/GrandBlockPhase.enum";
import { GrandBlockTypeEnum } from "./enums/GrandBlockType.enum";

export class GrandBlock {

    private _mainCoordinate: Coordinate;
    private _type: GrandBlockType;
    private _phase: GrandBlockPhase;
    private _color: string;

    constructor(type: GrandBlockTypeEnum, color: string){
        this._type = GrandBlockType.of(type);
        this._phase = GrandBlockPhase.ONE;
        this._color = color;
        this._mainCoordinate = this._type.startCoordinate;

    }

    public get coordinate(): Coordinate {
        return this._mainCoordinate;
    }

    
    public set coordinate(coordinate : Coordinate) {
        this._mainCoordinate = coordinate;
    }

    
    public get color() : string {
        return this._color;
    }
    
    
    
    public get coordinates() : Array<Coordinate> {
        return this._type.getCoordinates(this._mainCoordinate, this._phase);
    }


    public getCoordinatesAfterRotation(): Array<Coordinate> {
        return this._type.getCoordinates(this._mainCoordinate, this.getNext());
    }

    private getNext(): GrandBlockPhase {
        if(this._phase === GrandBlockPhase.ONE) {
            return GrandBlockPhase.TWO;
        } else if (this._phase === GrandBlockPhase.TWO) {
           return GrandBlockPhase.THREE;
        } else if (this._phase === GrandBlockPhase.THREE) {
           return GrandBlockPhase.FOUR;
        } else {
           return GrandBlockPhase.ONE;
        }
    }

    public rotate(): void {
        this._phase = this.getNext();
    }

    

}