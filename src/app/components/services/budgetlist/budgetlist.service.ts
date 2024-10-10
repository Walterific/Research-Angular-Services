import { Injectable } from '@angular/core';

export interface BudgetList {
  id: string;
  amount: number;
  day: string;
}

@Injectable({
  providedIn: 'root',
})
export class BudgetListService {
  private budgets: BudgetList[] = [];

  addBudget(id: string, amount: number, day: string): void {
    this.budgets.push({ 
      id, 
      amount,  
      day 
    });
  }

  getBudgets(): BudgetList[] {
    return this.budgets;
  }
}
