import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { starWarsService } from '../star-wars.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() character;
  @Output() sideAssigned = new EventEmitter<{name: string, side: string}>();
  swService : starWarsService;
  constructor(swService : starWarsService) {
    this.swService = swService;
   }

  ngOnInit() {
  }
  onAssign(side){
    //this.sideAssigned.emit({name: this.character.name, side:side});
    //const swService = new starWarsService();
    this.swService.OnSideChosen({name:this.character.name,side:side});
  }
}
