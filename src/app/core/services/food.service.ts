import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Food } from '../models/food';
import { Foods } from '../test/food-items';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  foods: Food[];
  selectedFood: Food;

  constructor() {
    this.foods = Foods;
  }

  getFoods(): Observable<Food[]> {
    const foodTypes = of(this.foods);
    return foodTypes;
  }

  getFoodsByType(id: number): Observable<Food[]> {
    const foods = this.foods.filter(i => i.FoodTypeId === id) as Food[];
    return of(foods);
  }

  getFood(id: number): Observable<Food> {
    const foodType = this.foods.find(i => i.FoodId === id) as Food;
    return of(foodType);
  }

  /*
  getAllFoods(): Observable<Food[]> {
    return this.apiService.get('Food')
      .pipe(map(data => data.data));
  }

  getFoods(id: number): Observable<Food> {
    return this.apiService.get('Foods/Id?id=' + id)
      .pipe(map(data => data.data));
  }

  postFoods(newFood: Food): Observable<Food> {
    return this.apiService
      .post(
        'api/Food',
        { Food: { body: newFood } }
      ).pipe(map(data => data.Food));
  }

  getFoodTypes(): Observable<any[]> {
    return this.apiService.get('FoodType')
      .pipe(map(data => data.data));
  }
  */
}
