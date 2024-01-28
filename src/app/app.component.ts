import { Component, HostListener, OnInit } from '@angular/core';
import { Block } from 'src/model/Block.model';
import { Coordinate } from 'src/model/Coordinate.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-tetris';

  public screen: Block[][] = [
    [new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block()],
    [new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block()],
    [new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block()],
    [new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block()],
    [new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block()],
    [new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block()],
    [new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block()],
    [new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block()],
    [new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block()],
    [new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block()],
    [new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block()],
    [new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block()],
    [new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block()],
    [new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block()],
    [new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block()],
    [new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block()],
    [new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block()],
    [new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block()],
    [new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block()],
    [new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block()],
    
  ];


   positionA: number = 0;
   positionB: number = 0;

  ngOnInit(): void {
      this.startScreen(this.screen, this.positionA, this.positionB);
  }

  constructor() {
  }

  public generateEmptyScreen(): Promise<Block[][]> {
    return new Promise(resolve => {
      let obj: Block[][] = [];
      for (let i = 0; i < 20; i++) {
        obj.push([]);
        for (let j = 0; j < 10; j++) {
          obj[i][j] = new Block();
        }
      }
      this.screen = obj;
      resolve(obj);
    });
  }

  public startScreen(blocks: Block[][], x: number, y: number): void {
    console.log(blocks, x ,y);
    console.log(blocks[x][y]);
    blocks[y][x].turnOn();
    console.log(blocks[x][y]);
  }

  @HostListener('document:keydown', ['$event'])
  public pressKey(event: KeyboardEvent): void {
    let key = event.code;

    switch (key) {
      case 'ArrowUp':
         this.screen[this.positionA][this.positionB].changeColor();
         break;
      case 'ArrowDown':
        let colorDown = this.screen[this.positionA][this.positionB].color;
        try {
          this.screen[this.positionA][this.positionB].turnOff();  
          this.positionA++;
          this.screen[this.positionA][this.positionB].turnOn(); 
          this.screen[this.positionA][this.positionB].color = colorDown;
        } catch (error) {
          this.positionA--;
          this.screen[this.positionA][this.positionB].turnOn();  
          this.screen[this.positionA][this.positionB].color = colorDown;

        }
        break;
      case 'ArrowLeft':
        let colorLeft = this.screen[this.positionA][this.positionB].color;
        try {
          this.screen[this.positionA][this.positionB].turnOff();  
          this.positionB--;
          this.screen[this.positionA][this.positionB].turnOn();
          this.screen[this.positionA][this.positionB].color = colorLeft;
  
        } catch (error) {
          this.positionB++;
          this.screen[this.positionA][this.positionB].turnOn();  
          this.screen[this.positionA][this.positionB].turnOn();  
          this.screen[this.positionA][this.positionB].color = colorLeft;

        }
        break;
      case 'ArrowRight':
        let colorRight = this.screen[this.positionA][this.positionB].color;

        try {
          this.screen[this.positionA][this.positionB].turnOff();  
          this.positionB++;
          this.screen[this.positionA][this.positionB].turnOn();  
          this.screen[this.positionA][this.positionB].color = colorRight;
        } catch (error) {
          this.positionB--;
          this.screen[this.positionA][this.positionB].turnOn();  
          this.screen[this.positionA][this.positionB].color = colorRight;

        }
        break;
      default:
        break;
    }
  }

  public onSwipeUp(){
    alert(1);
    
  }

}
