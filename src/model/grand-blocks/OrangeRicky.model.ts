import { Coordinate } from "../Coordinate.model";
import { Rotatable } from "../interfaces/Rotatable.interface";

export class OrangeRicky implements Rotatable {

    getPhaseOneRotatingCoordinates(mainCoordinate: Coordinate): Coordinate[] {
        return [
            new Coordinate(mainCoordinate.x, mainCoordinate.y),
            new Coordinate(mainCoordinate.x - 1, mainCoordinate.y),
            new Coordinate(mainCoordinate.x - 2, mainCoordinate.y),
            new Coordinate(mainCoordinate.x, mainCoordinate.y - 1),
        ];
    }
    getPhaseTwoRotatingCoordinates(mainCoordinate: Coordinate): Coordinate[] {
        return [
            new Coordinate(mainCoordinate.x - 1, mainCoordinate.y),
            new Coordinate(mainCoordinate.x - 1, mainCoordinate.y - 1),
            new Coordinate(mainCoordinate.x - 1, mainCoordinate.y - 2),
            new Coordinate(mainCoordinate.x, mainCoordinate.y),
        ];
    }
    getPhaseThreeRotatingCoordinates(mainCoordinate: Coordinate): Coordinate[] {
        return [
            new Coordinate(mainCoordinate.x - 1, mainCoordinate.y - 1),
            new Coordinate(mainCoordinate.x, mainCoordinate.y - 1),
            new Coordinate(mainCoordinate.x + 1, mainCoordinate.y - 1),
            new Coordinate(mainCoordinate.x - 1, mainCoordinate.y),
        ];

    }
    getPhaseFourRotatingCoordinates(mainCoordinate: Coordinate): Coordinate[] {
        return [
            new Coordinate(mainCoordinate.x, mainCoordinate.y - 2),
            new Coordinate(mainCoordinate.x, mainCoordinate.y - 1),
            new Coordinate(mainCoordinate.x, mainCoordinate.y),
            new Coordinate(mainCoordinate.x - 1, mainCoordinate.y - 2),
        ];

    }

}