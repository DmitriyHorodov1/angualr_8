import { Component, OnInit } from '@angular/core';
import {DishesDataService} from "../services/dishes-data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {

  dishes!: any[];

  constructor(private DishesDataService:DishesDataService ) {
    DishesDataService.getDishes().subscribe(
      (dishes)=>this.dishes=dishes
    );
  }
  ngOnInit() {
  }

}
