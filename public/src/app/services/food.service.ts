import { Injectable } from '@angular/core';
import { sample_foods } from 'src/assets/data';
import { Food } from 'src/assets/models';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllFoods(): Food[] {
    return sample_foods;
  }

  SearchFood(keyword: string) {
    return this.getAllFoods().filter(food => food.name.toLowerCase().includes(keyword.toLowerCase()));
  }
}
