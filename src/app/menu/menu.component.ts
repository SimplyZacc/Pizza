import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FooterService } from '../footer/footer.service';
import { FoodTypeService } from '../core/services/food-type.service';
import { FoodService } from '../core/services/food.service';

import { FoodType } from '../core/models/food-type';
import { Food } from '../core/models/food';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  foodTypes: FoodType[];
  foods: Food[];
  selected: number;

  constructor(private footerService: FooterService, private foodTypeService: FoodTypeService,
              private router: Router, private foodService: FoodService) { }

  ngOnInit(): void {
    this.footerService.hide();
    this.getFoodTypes();
    this.getFoods(0);
    this.selected = 0;
  }

  getFoodTypes(): void {
    this.foodTypeService.getFoodTypes().subscribe(ft => this.foodTypes = ft);
  }

  getFoods(id: number): void {
    this.foodService.getFoodsByType(id).subscribe(ft => this.foods = ft);
  }

  setSelectedType(selectedFoodType: number): void {
    this.selected = selectedFoodType;
    this.getFoods(selectedFoodType);
    console.log(this.foods);
    // this.foodTypeService.setSelected(selectedFoodType);
    // this.foodService.setSelected(selectedFoodType);
    // this.router.navigate(['/food']);
  }

}
