import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { sample_foods, sample_tags } from 'src/assets/data';
import { Food, Tag } from 'src/assets/models';
import { FOODS_BY_ID_URL, FOODS_BY_SEARCH_URL, FOODS_BY_TAG_URL, FOODS_URL } from '../common/constants/urls';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }

  getAllFoods(): Observable<Food[]> {
    return this.http.get<Food[]>(FOODS_URL);
  }

  SearchFood(keyword: string) {
    return this.http.get<Food[]>(FOODS_BY_SEARCH_URL + keyword);
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(FOODS_BY_TAG_URL);
  }

  getFoodsByTag(tag: string): Observable<Food[]> {
    if (tag === 'All') return this.getAllFoods();

    return this.http.get<Food[]>(FOODS_BY_TAG_URL + tag);
  }

  getFoodByID(foodID: string): Observable<Food> {
    return this.http.get<Food>(FOODS_BY_ID_URL + foodID);
  }
}
