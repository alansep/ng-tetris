export class Block {

    public isOn: boolean;
    public color: string = '';

    constructor() {
        this.isOn = false;
    }


    public turnOn(): void {
        this.isOn = true;
        this.color = 'green';
    }

    public turnOff(): void {
        this.isOn = false;
        this.color = '';
    }

    public changeColor(): void {
        if (this.color === '') {
            this.color = 'green'
        } else if (this.color === 'green') {
            this.color = 'red'
        } else if (this.color === 'red') {
            this.color = 'blue'
        } else if (this.color === 'blue') {
            this.color = 'yellow'
        } else {
            this.color = 'green';
        }
    }



}