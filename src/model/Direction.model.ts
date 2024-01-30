import { DirectionEnum } from "./enums/Direction.enum";

export class Direction {

    private static DIRECTIONS = [new Direction(DirectionEnum.DOWN, 0, 1), new Direction(DirectionEnum.LEFT, -1, 0), new Direction(DirectionEnum.RIGHT, 1, 0)];

    private _direction: DirectionEnum;
    private _xAxisMovement: number;
    private _yAxisMovement: number;

    constructor(directionEnum: DirectionEnum, xAxisMovement: number, yAxisMovement: number){
        this._direction = directionEnum;
        this._xAxisMovement = xAxisMovement;
        this._yAxisMovement = yAxisMovement;
    }

    public get direction(): DirectionEnum {
        return this._direction;
    }

    
    public get xAxisMovement() : number {
        return this._xAxisMovement;
    }

    
    public get yAxisMovement() : number {
        return this._yAxisMovement;
    }

    public static of(directionEnum: DirectionEnum): Direction {
        return this.DIRECTIONS.filter(direction => direction.direction === directionEnum)[0];
    }
    
    
    
}