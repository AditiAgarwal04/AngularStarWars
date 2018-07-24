import { Component, OnInit } from '@angular/core';
import { starWarsService } from '../star-wars.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  characters = [];
  /* characters = [
    {name:'Luke Skywalker',side:''},
    {name:'Darth Wader',side:''},

  ]; */
  chosenList = 'all';
  swService : starWarsService;
  constructor(swService : starWarsService) {
    this.swService = swService;
   }

  ngOnInit() {
  }
  onChoose(side){
    this.chosenList = side;
  }
  getCharacters(){
    //const swService = new starWarsService();
    this.characters = this.swService.getCharacters(this.chosenList);
    return this.characters;
  }
 /*  getCharacters(){
   
      if(this.chosenList==='all'){
        return this.characters.slice();
      }
    //  function isBigEnough(element, index, array) { 
      //  return (element.side ==  "dark"); 
      //} 
               
      //return this.characters.filter(isBigEnough); 
     
      return this.characters.filter((element)=>{
        return (element.side == this.chosenList);
        

      });
  } */
 /*  OnSideChosen(charInfo){
   
    const pos = this.characters.findIndex((char) =>{
      return char.name ===charInfo.name;
    });
    this.characters[pos].side = charInfo.side;
  } */
}
