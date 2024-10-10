import { Injectable } from '@angular/core';

export interface employeeList {
    id: string;
    name: string;
    job: string;
}

@Injectable ({
    providedIn: 'root',
})

export class EmployeeListService {
    private employee: employeeList[] = [];

    addEmployee(id: string, name: string, job: string): void {
        this.employee.push({
            id,
            name,
            job
        });
    }

    getEmployee(): employeeList[] {
        return this.employee;
    }
}