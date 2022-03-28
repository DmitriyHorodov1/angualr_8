import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MyComponent} from "./my/my.component";
import { DishComponent } from './dish/dish.component';
import { FormsModule } from '@angular/forms';
import { NewDishComponent } from './new-dish/new-dish.component';
import { DishListComponent } from './dish-list/dish-list.component';
import { DishComponentComponent } from './dish-component/dish-component.component';
import {Routes, RouterModule} from "@angular/router";

const routes: Routes =[
  {path:'dishes', component: DishListComponent},
  {path:'component/:dshId', component: DishComponentComponent},
  {path: '', redirectTo: 'dishes', pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    DishComponent,
    NewDishComponent,
    DishListComponent,
    DishComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
