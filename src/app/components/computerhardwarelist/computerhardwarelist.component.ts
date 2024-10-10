import { Component } from '@angular/core';
import { ComputerHardwareListService, ComputerHardware } from '../services/computerhardwarelist/computerhardwarelist.service';

@Component({
  selector: 'app-computerhardwarelist',
  templateUrl: './computerhardwarelist.component.html',
  styleUrl: './computerhardwarelist.component.css'
})
export class ComputerhardwarelistComponent {
  computerHardwareList: ComputerHardware[] = [];
  id: string = '';
  hardware: string = '';
  descriptions: string = '';
  price: number = 0;

  constructor(private computerHardwareListService: ComputerHardwareListService) {
    this.computerHardwareList = this.computerHardwareListService.getComputerHardwareList();
  }

  addComputerHardware(): void {
    this.computerHardwareListService.addComputerHardware(this.id, this.hardware, this.descriptions, this.price);
    this.clearForm();
  }

  clearForm(): void {
    this.id = '';
    this.hardware = '';
    this.descriptions = '';
    this.price = 0;
  }
}
