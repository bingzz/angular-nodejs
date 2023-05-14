import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/assets/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  foods: Food[] = [];

  constructor(foodService: FoodService, activatedRoute: ActivatedRoute) {
    // activatedRoute subscribe - call function on the changes in the params
    activatedRoute.params.subscribe((params) => {
      if (params['tag']) {
        this.foods = foodService.getFoodsByTag(params['tag']);
        return;
      }

      if (params['keyword']) {
        this.foods = foodService.SearchFood(params['keyword']);
        return;
      }

      this.foods = foodService.getAllFoods();
    })
  }

  ngOnInit(): void {

  }
}
