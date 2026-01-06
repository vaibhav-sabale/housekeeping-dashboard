import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloorComponent } from './floor/floor';
import { DatePicker } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';
import { SelectButton } from 'primeng/selectbutton';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputIcon } from 'primeng/inputicon';
import { IconField } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FloorComponent, DatePicker, FormsModule, SelectButton, ToolbarModule, CardModule, IconFieldModule, InputIconModule, InputIcon, IconField, InputTextModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  selectedDate: Date = new Date();

  stateOptions: any[] = [{ label: 'Overview', value: 'overview' }, { label: 'Chart View', value: 'chart-view' }];

  value: string = 'overview';


}