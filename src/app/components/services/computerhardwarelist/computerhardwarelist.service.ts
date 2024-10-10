import { Injectable } from '@angular/core';

export interface ComputerHardware {
  id: string;
  hardware: string;
  descriptions: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class ComputerHardwareListService {
  private computerHardwareList: ComputerHardware[] = [];

  addComputerHardware(id: string, hardware: string, descriptions: string, price: number): void {
    this.computerHardwareList.push({ id, hardware, descriptions, price });
  }

  getComputerHardwareList(): ComputerHardware[] {
    return this.computerHardwareList;
  }
}
