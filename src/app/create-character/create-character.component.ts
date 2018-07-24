import { Component, OnInit } from '@angular/core';
import { starWarsService } from '../star-wars.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {
  availableSides = [
    {display:'None',value : '' },
    {display:'Light',value : 'light' },
    {display:'Dark',value : 'dark' }
  ]
  swService: starWarsService;
  constructor(swService: starWarsService) { 
    this.swService = swService;
  }

  ngOnInit() {
  }
  onSubmit(form){
    if(form.invalid)
      return;
    console.log( form.value);
   /*  if (form.value.name == '')
      alert("Enter Name!")
    else */
      this.swService.addCharacter(form.value.name,form.value.side);
  }
}
