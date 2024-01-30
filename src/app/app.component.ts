import { Component, HostListener, OnInit } from '@angular/core';
import { Block } from 'src/model/Block.model';
import { Coordinate } from 'src/model/Coordinate.model';
import { GrandBlock } from 'src/model/GrandBlock.model';
import { Screen } from 'src/model/Screen.model';
import { DirectionEnum } from 'src/model/enums/Direction.enum';
import { GrandBlockTypeEnum } from 'src/model/enums/GrandBlockType.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-tetris';

  public screen = new Screen();
  public grandBlock: GrandBlock = new GrandBlock(GrandBlockTypeEnum.ORANGE_RICKY, '#5bb54f');
  private current_color: string = '#5bb54f';

  ngOnInit(): void {

      this.screen.createGrandBlock(this.grandBlock);

     // setInterval(() => this.screen.movementGrandBlock(this.grandBlock, DirectionEnum.DOWN), 1000);
  }

  constructor() {
  }

  @HostListener('document:keydown', ['$event'])
  public pressKey(event: KeyboardEvent): void {
    let key = event.code;

    switch (key) {
      case 'ArrowUp':
        this.screen.rotateGrandBlock(this.grandBlock);
         break;
      case 'ArrowDown':
        try{
          this.screen.movementGrandBlock(this.grandBlock, DirectionEnum.DOWN);
        } catch (exception){
          this.current_color = this.getNextColor(this.current_color);
          this.grandBlock = new GrandBlock(GrandBlockTypeEnum.ORANGE_RICKY, this.current_color);
          this.screen.createGrandBlock(this.grandBlock);
        }
        break;
      case 'ArrowLeft':
        this.screen.movementGrandBlock(this.grandBlock, DirectionEnum.LEFT);
        break;      
      case 'ArrowRight':
        this.screen.movementGrandBlock(this.grandBlock, DirectionEnum.RIGHT);
        break;  
      default:
        break;
    }
  }

  public getNextColor(currentColor: string): string {
    if(currentColor === '#5bb54f'){
      return '#42579f'
    } else if (currentColor === '#42579f'){
      return '#e03d36'
    } else if (currentColor === '#e03d36'){
      return '#e1de3d'
    } else if (currentColor === '#e1de3d'){
      return '#87589d'
    } else {
      return '#5bb54f';
    }
  }


}
