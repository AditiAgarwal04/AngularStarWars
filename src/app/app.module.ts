import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule} from '@angular/forms';
import {RouterModule } from '@angular/router';
//import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { starWarsService } from './star-wars.service';
import { LogService } from './log.service';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { HeaderComponent } from './header/header.component';

const routes = [
  {path:'',component:TabsComponent},
  {path:'new-character',component:CreateCharacterComponent},
  {path:'**', redirectTo:'/'}
]

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    CreateCharacterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
   /*  MatButtonModule,
    MatCheckboxModule */
  ],
  providers: [starWarsService,LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
