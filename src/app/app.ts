import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // add this
import { FloorComponent } from './floor/floor';
import { DatePicker } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';
import { SelectButton } from 'primeng/selectbutton';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FloorComponent, DatePicker, FormsModule, SelectButton],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  selectedDate: Date = new Date();
  // date: Date | undefined;

  stateOptions: any[] = [{ label: 'Overview', value: 'overview' }, { label: 'Chart View', value: 'chart-view' }];

  value: string = 'overview';


}