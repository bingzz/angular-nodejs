import { Injectable } from '@angular/core';
import { sample_foods, sample_tags } from 'src/assets/data';
import { Food, Tag } from 'src/assets/models';

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

  getAllTags(): Tag[] {
    return sample_tags;
  }

  getFoodsByTag(tag: string): Food[] {
    if (tag === 'All') return this.getAllFoods();

    return this.getAllFoods().filter(food => food.tags?.includes(tag));
  }

  getFoodByID(foodID: string): Food {
    return this.getAllFoods().find(food => food.id === foodID) ?? new Food();
  }
}
