import { Coordinate } from "./Coordinate.model"
import { GrandBlockPhase } from "./enums/GrandBlockPhase.enum";
import { GrandBlockTypeEnum } from "./enums/GrandBlockType.enum"
import { OrangeRicky } from "./grand-blocks/OrangeRicky.model";
import { Rotatable } from "./interfaces/Rotatable.interface";

export class GrandBlockType {

    private static TYPES: Array<GrandBlockType> = [new GrandBlockType(GrandBlockTypeEnum.ORANGE_RICKY, new Coordinate(6,4), new OrangeRicky())];
    // BLUE_RICKY,
    // CLEVELAND_Z,
    // RHODE_ISLAND_Z,
    // HERO,
    // TEEWEE,
    // SMASHBOY

    private _grandBlockTypeEnum: GrandBlockTypeEnum;
    private _startCoordinate: Coordinate;
    private _rotatable: Rotatable;

    constructor(grandBlockTypeEnum: GrandBlockTypeEnum, startCoordinate: Coordinate, rotatable: Rotatable) {
        this._grandBlockTypeEnum = grandBlockTypeEnum;
        this._startCoordinate = startCoordinate;
        this._rotatable = rotatable;
    }

    public static of(grandBlockTypeEnum: GrandBlockTypeEnum): GrandBlockType {
        return GrandBlockType.TYPES.filter(type => type._grandBlockTypeEnum === grandBlockTypeEnum)[0];
    }
    
    
    public get startCoordinate() : Coordinate {
        return this._startCoordinate;
    }
    

    public getCoordinates(mainCoordinate: Coordinate, phase: GrandBlockPhase): Array<Coordinate> {
        switch (phase) {
            case GrandBlockPhase.ONE:
                return this._rotatable.getPhaseOneRotatingCoordinates(mainCoordinate);
            case GrandBlockPhase.TWO:
                return this._rotatable.getPhaseTwoRotatingCoordinates(mainCoordinate);
            case GrandBlockPhase.THREE:
                return this._rotatable.getPhaseThreeRotatingCoordinates(mainCoordinate);
            case GrandBlockPhase.FOUR:
                return this._rotatable.getPhaseFourRotatingCoordinates(mainCoordinate);
        }
    }


}