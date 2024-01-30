import { core } from "@angular/compiler";
import { Block } from "./Block.model";
import { Coordinate } from "./Coordinate.model";
import { Direction } from "./Direction.model";
import { GrandBlock } from "./GrandBlock.model";
import { DirectionEnum } from "./enums/Direction.enum";
import { CreateAnotherBlockException } from "./exception/CreateAnotherBlock.model";

export class Screen {

    private _blocks: Block[][];
    private isBeingCleared: boolean = false;

    constructor() {
        this._blocks = [];
        for (let i = 0; i < 20; i++) {
            this._blocks.push([]);
            for (let j = 0; j < 10; j++) {
                this._blocks[i][j] = new Block();
            }
        }
    };

    public get blocks() {
        return this._blocks;
    }


    public createGrandBlock(grandBlock: GrandBlock): void {
        this.canCreateBlock().then(resolve => {
            if (resolve) {
                grandBlock.coordinates.forEach(position => {
                    this.blocks[position.y][position.x].turnOn(grandBlock.color);
                });
            }
        });
    }



    public movementGrandBlock(grandBlock: GrandBlock, direction: DirectionEnum): void {
        if (this.canBeMovemented(grandBlock, direction)) {
            this.changeGrandBlockPosition(grandBlock, direction);
        }
    }

    public rotateGrandBlock(grandBlock: GrandBlock): void {
        if (this.canBeMovementedAfterRotation(grandBlock)) {
            this.changeGrandBlockPositionOnRotation(grandBlock);
        }
    }


    public canCreateBlock(): Promise<boolean> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(!this.isBeingCleared);
            }, 1500);
        });
    }

    public clearFullLines(): void {
        this.isBeingCleared = true;
        let linesToBeShift: number[] = [];
        for (let i = 0; i < 20; i++) {
            let fullLine: boolean = true;
            for (let j = 0; j < 10; j++) {
                fullLine = fullLine && this.blocks[i][j].isOn;
            }
            if (fullLine) {
                linesToBeShift.push(i);
                for (let j = 0; j < 10; j++) {
                    this.blocks[i][j].turnOff();
                }
            }
        }

        for (let i = linesToBeShift[linesToBeShift.length - 1] - linesToBeShift.length; i > 0; i--) {

            console.log(i);
            console.log(linesToBeShift.length);

            for (let j = 0; j < 10; j++) {
                if (this.blocks[i][j].isOn) {
                    this.blocks[i + linesToBeShift.length][j].turnOn(this.blocks[i][j].color);
                    this.blocks[i][j].turnOff();
                }
            }
        }
        this.isBeingCleared = false;
    }


    private canBeMovemented(grandBlock: GrandBlock, direction: DirectionEnum): boolean {
        
        let coordinates = grandBlock.coordinates;

        try {
            coordinates.forEach(block => {
                let foundDirection = Direction.of(direction);
                let foundBlock = this.blocks[block.y + foundDirection.yAxisMovement][block.x + foundDirection.xAxisMovement];
                if (foundBlock === undefined || (foundBlock.isOn && coordinates.map(coordinates => this.blocks[coordinates.y][coordinates.x]).filter(block => block === foundBlock).length == 0)) {
                    throw new Error();
                }
            });
            return true;
        } catch (error) {
            if (direction == DirectionEnum.DOWN) {
                throw new CreateAnotherBlockException();
            } else {
                return false;
            }
        }

    }

    private canBeMovementedAfterRotation(grandBlock: GrandBlock): boolean {
        try {
            grandBlock.getCoordinatesAfterRotation().forEach(block => {
                let foundBlock = this.blocks[block.y][block.x];
                if (foundBlock === undefined || (foundBlock.isOn && grandBlock.getCoordinatesAfterRotation().map(coordinates => this.blocks[coordinates.y][coordinates.x]).filter(block => block === foundBlock).length == 0)) {
                    throw new Error();
                }
            });
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    private changeGrandBlockPosition(grandBlock: GrandBlock, direction: DirectionEnum): void {
        let foundDirection = Direction.of(direction);

        grandBlock.coordinates.forEach(coordinate => this.blocks[coordinate.y][coordinate.x].turnOff());

        grandBlock.coordinate = new Coordinate(grandBlock.coordinate.x + foundDirection.xAxisMovement, grandBlock.coordinate.y + foundDirection.yAxisMovement);

        grandBlock.coordinates.forEach(coordinate => this.blocks[coordinate.y][coordinate.x].turnOn(grandBlock.color));
    }

    private changeGrandBlockPositionOnRotation(grandBlock: GrandBlock): void {

        grandBlock.coordinates.forEach(coordinate => this.blocks[coordinate.y][coordinate.x].turnOff());

        grandBlock.rotate()

        grandBlock.coordinates.forEach(coordinate => this.blocks[coordinate.y][coordinate.x].turnOn(grandBlock.color));
    }



}
