import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Food } from '../models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor( private apiService: ApiService) { }

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
}
