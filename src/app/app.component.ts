import { Component } from '@angular/core';
import { DishesDataService } from "./services/dishes-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dishes!: any[];

  constructor() {}

}
