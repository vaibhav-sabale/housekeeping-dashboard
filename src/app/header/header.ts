import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  selector: 'app-header',
  imports: [CommonModule, DatePicker, FormsModule, SelectButton, ToolbarModule, CardModule, IconFieldModule, InputIconModule, InputIcon, IconField, InputTextModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

    selectedDate: Date = new Date();

    stateOptions: any[] = [{ label: 'Overview', value: 'overview' }, { label: 'Chart View', value: 'chart-view' }];

    value: string = 'overview';
}
