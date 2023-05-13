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

  constructor(private foodService: FoodService, activatedRoute: ActivatedRoute) {
    // subscribe - call function on the changes in the params
    activatedRoute.params.subscribe((params) => {
      if (!params['keyword']) { // params should be the same keyword to the routemodule
        this.foods = foodService.getAllFoods();
        return;
      }

      this.foods = foodService.SearchFood(params['keyword']);
    })
  }

  ngOnInit(): void {

  }
}
