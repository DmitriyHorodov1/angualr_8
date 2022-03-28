import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DishesDataService} from "../services/dishes-data.service";

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: [ 'dish.component.scss']
})
export class DishComponent implements OnInit {
  @Input() dish: any;
  @Input() dshIndex!:number;


  showInfo = false;

  constructor(private DishesDataService:DishesDataService) { }


  ngOnInit() {  }



  delDish(){
    this.DishesDataService.deleteDish(this.dshIndex);
  }

}
