import { Component } from '@angular/core';
import { MealPlanListService, MealPlanList } from '../services/mealplanlist/mealplanlist.service';

@Component({
  selector: 'app-mealplanlist',
  templateUrl: './mealplanlist.component.html',
  styleUrl: './mealplanlist.component.css'
})
export class MealplanlistComponent {
  mealPlans: MealPlanList[] = [];
  id: string = '';
  foodName: string = '';
  day: string = '';
  mealType: string = '';

  constructor(private mealPlanListService: MealPlanListService) {
    this.mealPlans = this.mealPlanListService.getMealPlans();
  }

  addMealPlan(): void {
    this.mealPlanListService.addMealPlan(this.id, this.foodName, this.day, this.mealType);
    this.clearForm();
  }

  clearForm(): void {
    this.id = '';
    this.foodName = '';
    this.day = '';
    this.mealType = '';
  }
}
