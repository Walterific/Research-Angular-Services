import { Component } from '@angular/core';
import { BudgetListService, BudgetList } from '../services/budgetlist/budgetlist.service';

@Component({
  selector: 'app-budgetlist',
  templateUrl: './budgetlist.component.html',
  styleUrl: './budgetlist.component.css'
})
export class BudgetlistComponent {
  budgets: BudgetList[] = [];
  id: string = '';
  amount: number = 0;
  day: string = '';

  constructor(private budgetListService: BudgetListService) {
    this.budgets = this.budgetListService.getBudgets();
  }

  addBudget(): void {
    this.budgetListService.addBudget(this.id, this.amount, this.day);
    this.clearForm();
  }

  clearForm(): void {
    this.id = '';
    this.amount = 0;
    this.day = '';
  }
}
