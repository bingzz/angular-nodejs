import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/assets/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  foods: Food[] = [];

  constructor(foodService: FoodService, activatedRoute: ActivatedRoute) {
    let foodsObservable: Observable<Food[]>;

    // activatedRoute subscribe - call function on the changes in the params
    activatedRoute.params.subscribe((params) => {
      if (params['tag']) {
        foodsObservable = foodService.getFoodsByTag(params['tag']);
        return;
      }

      if (params['keyword']) {
        foodsObservable = foodService.SearchFood(params['keyword']);
        return;
      }

      foodsObservable = foodService.getAllFoods();

      foodsObservable.subscribe((serverFoods) => {
        this.foods = serverFoods;
      })
    })
  }
}
