import { Component } from '@angular/core';
import { FloorComponent } from '../floor/floor';
import { Header } from '../header/header';

@Component({
  selector: 'app-dashboard',
  imports: [Header, FloorComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

}
