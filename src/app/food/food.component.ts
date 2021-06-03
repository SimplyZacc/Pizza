import { Component, OnInit } from '@angular/core';

import { FoodService } from '../core/services/food.service';


@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.sass']
})
export class FoodComponent implements OnInit {

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    console.log(this.foodService.foods);
  }

}
