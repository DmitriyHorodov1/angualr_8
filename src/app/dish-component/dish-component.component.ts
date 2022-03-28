import { Component, OnInit } from '@angular/core';
import{ DishesDataService} from "../services/dishes-data.service";
import{ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dish-component',
  templateUrl: './dish-component.component.html',
  styleUrls: ['./dish-component.component.css']
})
export class DishComponentComponent implements OnInit {

  dish_component!: any[];
  DishNam!: string;

  constructor(private DishesDataService: DishesDataService,private  ActivatedRoute:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(
      params =>{
        this.DishNam = params['dshId'];
        this.getDishComponent(this.DishNam);
      }
    );
  }
  getDishComponent(name: string){
    const DishName = +name;
    this.DishesDataService.getDishesComponent(DishName).subscribe(
      (dish_component)=>{
        this.dish_component = dish_component;
      }
    );
  }

}
