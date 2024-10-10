import { Component } from '@angular/core';
import { EmployeeListService, employeeList } from '../services/employeelist/employeelist.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.css'
})
export class EmployeelistComponent {
  employee: employeeList[] = [];
  id: string = '';
  name: string = '';
  job: string = '';

  constructor(private employeeListService: EmployeeListService) {
    this.employee = this.employeeListService.getEmployee();
  }

  addEmployee(): void {
    this.employeeListService.addEmployee(this.id, this.name, this.job);
    this.clearForm();
  }

  clearForm(): void {
    this.id = '';
    this.name = '';
    this.job = '';
  }
}

