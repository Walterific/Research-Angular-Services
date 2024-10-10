import { Injectable } from '@angular/core';

export interface MealPlanList {
  id: string;
  foodName: string;
  day: string;
  mealType: string;
}

@Injectable({
  providedIn: 'root',
})
export class MealPlanListService {
  private mealPlans: MealPlanList[] = [];

  addMealPlan(id: string, foodName: string, day: string, mealType: string): void {
    this.mealPlans.push({ 
      id, 
      foodName,  
      day,
      mealType 
    });
  }

  getMealPlans(): MealPlanList[] {
    return this.mealPlans;
  }
}
