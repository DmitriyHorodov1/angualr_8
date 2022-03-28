import { Injectable } from '@angular/core';
import {of} from "rxjs";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DishesDataService {

  dishes = [
    {
      dish_name : 'Steak',
      dish_type : 'Meat',
      dish_weight : '600g',
      dish_amount: 36
    },
    {
      dish_name : 'Spagetti',
      dish_type : 'Noodles',
      dish_weight : '500g',
      dish_amount: 23
    },
  ];

  private dish_component = [
    {name:'chees', DishNam:"Spagetti"},
    {name:'noodles', DishNam:"Spagetti"},
    {name:'pasta', DishNam:"Spagetti"},
    {name:'meat', DishNam:"Steak"},
    {name:'sous', DishNam:"Steak"},
    {name:'solt', DishNam:"Steak"},
  ];

  constructor() { }

  addDish(dish:any){
    this.dishes.push(dish);
  }

  deleteDish(index:number){
    this.dishes.splice(index, 1)
  }
  getDishes(): Observable<any[]>{
    return of(this.dishes);
  }
  getDishesComponent(DishName: any): Observable<any[]>{
    return of(this.dish_component.filter(elem=>{
      return elem.DishNam === DishName;
    }));

  }
}
