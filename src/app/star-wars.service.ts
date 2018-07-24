import { LogService } from "./log.service";
import { Injectable } from "@angular/core";

@Injectable()
export class starWarsService{
    private characters = [
        {name:'Luke Skywalker',side:''},
        {name:'Darth Wader',side:''},
    
      ];

private logService:LogService;
constructor(logService: LogService){
    this.logService = logService;

}

      getCharacters(chosenList){
   
        if(chosenList==='all'){
          return this.characters.slice();
        }
      //  function isBigEnough(element, index, array) { 
        //  return (element.side ==  "dark"); 
        //} 
                 
        //return this.characters.filter(isBigEnough); 
       
        return this.characters.filter((element)=>{
          return (element.side == chosenList);
          
  
        });
    }
    OnSideChosen(charInfo){
   
        const pos = this.characters.findIndex((char) =>{
          return char.name ===charInfo.name;
        });
        this.characters[pos].side = charInfo.side;
        this.logService.writeLog("On Side chosen Called");
      }

    addCharacter(name,side){
      const newchar  = {name:name,side:side};
      this.characters.push(newchar);

    }
}