import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import {DishesDataService} from "../services/dishes-data.service";

@Component({
  selector: 'app-new-dish',
  templateUrl: './new-dish.component.html',
  styleUrls: ['./new-dish.component.css']
})
export class NewDishComponent implements OnInit {


  showForm = false;

  constructor(private DishesDataService:DishesDataService) { }

  ngOnInit(): void {
  }

  onSubmit(myForm:any){
    const fields = myForm.form.controls;
    this.showForm = false;
    this.DishesDataService.addDish({
      dish_name:fields.dish_name.value,
      dish_type: fields.dish_type.value,
      dish_weight: fields.dish_weight.value,
      dish_amount:fields.dish_amount.value
    });
  }

}
