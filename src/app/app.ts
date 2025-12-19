import { Component } from '@angular/core';
import { Floor } from './floor/floor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Floor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}