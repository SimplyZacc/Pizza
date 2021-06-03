import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { FoodType } from '../models/food-type';
import { FoodTypes } from '../test/food-types';

@Injectable({
  providedIn: 'root'
})
export class FoodTypeService {

  foodTypes: FoodType[];
  selectedFoodType: FoodType;

  constructor() {
    this.foodTypes = FoodTypes;
    if (localStorage.getItem('SelectedType') === null) {
      this.getFoodType(1).subscribe(ft => this.selectedFoodType = ft);
    } else {
      this.selectedFoodType = JSON.parse(localStorage.getItem('SelectedType')) as FoodType;
    }
  }

  getFoodTypes(): Observable<FoodType[]> {
    const foodTypes = of(this.foodTypes);
    return foodTypes;
  }

  getFoodType(id: number): Observable<FoodType> {
    const foodType = this.foodTypes.find(i => i.FoodTypeId === id) as FoodType;
    return of(foodType);
  }

  setSelected(selFoodType: number): void {
    this.getFoodType(selFoodType).subscribe(ft => this.selectedFoodType = ft);
    localStorage.setItem('SelectedType', JSON.stringify(this.selectedFoodType));
  }
}
