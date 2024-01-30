export class Block {

    public isOn: boolean;
    public color: string;

    constructor() {
        this.isOn = false;
        this.color = 'black';
    }


    public turnOn(color: string): void {
        this.isOn = true;
        this.color = color;
    }

    public turnOff(): void {
        this.isOn = false;
    }

}