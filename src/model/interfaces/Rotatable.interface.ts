import { Coordinate } from "../Coordinate.model";

export interface Rotatable {

    getPhaseOneRotatingCoordinates(mainCoordinate: Coordinate): Array<Coordinate>;
    getPhaseTwoRotatingCoordinates(mainCoordinate: Coordinate): Array<Coordinate>;
    getPhaseThreeRotatingCoordinates(mainCoordinate: Coordinate): Array<Coordinate>;
    getPhaseFourRotatingCoordinates(mainCoordinate: Coordinate): Array<Coordinate>;

}