import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgClass } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';

type StatusClass = 'cleaned' | 'dirty' | 'inspect';

interface Room {
  number: string;
  type: string;
  statusClass: StatusClass;
  iconsTop: string[];
  iconsBottom: string[];
}

@Component({
  selector: 'app-floor',
  standalone: true,
  imports: [CommonModule, NgClass, AccordionModule],
  templateUrl: './floor.html',
  styleUrls: ['./floor.css'],
})
export class FloorComponent {
  // Track which floors are open/closed
  floor1Expanded: boolean = true;   // open by default
  floor2Expanded: boolean = false;  // closed by default

  floor1Rooms: Room[] = [
    {
      number: '101',
      type: 'Deluxe',
      statusClass: 'cleaned',
      iconsTop: ['departure.svg', 'guest.svg', 'arrival.svg'],
      iconsBottom: ['guest-req.svg', 'maintenance.svg', 'dnd.svg'],
    },
    {
      number: '102',
      type: 'Deluxe',
      statusClass: 'dirty',
      iconsTop: ['departure.svg', 'guest.svg', 'arrival.svg'],
      iconsBottom: ['guest-req.svg', 'maintenance.svg'],
    },
    {
      number: '103',
      type: 'Deluxe',
      statusClass: 'inspect',
      iconsTop: ['departure.svg', 'guest.svg', 'arrival.svg'],
      iconsBottom: ['guest-req.svg', 'maintenance.svg'],
    },
    {
      number: '104',
      type: 'Deluxe',
      statusClass: 'cleaned',
      iconsTop: ['departure.svg', 'guest.svg', 'arrival.svg'],
      iconsBottom: ['guest-req.svg', 'maintenance.svg', 'dnd.svg'],
    },
    {
      number: '105',
      type: 'Deluxe',
      statusClass: 'dirty',
      iconsTop: ['departure.svg', 'guest.svg', 'arrival.svg'],
      iconsBottom: ['guest-req.svg', 'maintenance.svg', 'dnd.svg'],
    },
    {
      number: '106',
      type: 'Deluxe',
      statusClass: 'dirty',
      iconsTop: ['departure.svg', 'guest.svg', 'arrival.svg'],
      iconsBottom: ['guest-req.svg', 'maintenance.svg', 'dnd.svg'],
    },
    {
      number: '107',
      type: 'Deluxe',
      statusClass: 'cleaned',
      iconsTop: ['departure.svg', 'guest.svg', 'arrival.svg'],
      iconsBottom: ['guest-req.svg', 'maintenance.svg'],
    },
    {
      number: '108',
      type: 'Deluxe',
      statusClass: 'cleaned',
      iconsTop: ['departure.svg', 'guest.svg', 'arrival.svg'],
      iconsBottom: ['guest-req.svg', 'maintenance.svg'],
    },
    {
      number: '109',
      type: 'Deluxe',
      statusClass: 'inspect',
      iconsTop: ['departure.svg', 'guest.svg', 'arrival.svg'],
      iconsBottom: ['guest-req.svg', 'maintenance.svg', 'dnd.svg'],
    },
    {
      number: '110',
      type: 'Deluxe',
      statusClass: 'cleaned',
      iconsTop: ['departure.svg', 'guest.svg', 'arrival.svg'],
      iconsBottom: ['guest-req.svg', 'maintenance.svg', 'dnd.svg'],
    },
  ];

  floor2Rooms: Room[] = [
    {
      number: '201',
      type: 'Deluxe',
      statusClass: 'cleaned',
      iconsTop: ['departure.svg', 'guest.svg', 'arrival.svg'],
      iconsBottom: ['guest-req.svg', 'maintenance.svg', 'mur.svg'],
    },
    {
      number: '202',
      type: 'Deluxe',
      statusClass: 'dirty',
      iconsTop: ['departure.svg', 'guest.svg', 'arrival.svg'],
      iconsBottom: ['guest-req.svg', 'maintenance.svg'],
    },
    {
      number: '203',
      type: 'Deluxe',
      statusClass: 'inspect',
      iconsTop: ['departure.svg', 'guest.svg', 'arrival.svg'],
      iconsBottom: ['guest-req.svg', 'maintenance.svg'],
    },
    {
      number: '204',
      type: 'Deluxe',
      statusClass: 'cleaned',
      iconsTop: ['departure.svg', 'guest.svg', 'arrival.svg'],
      iconsBottom: ['guest-req.svg', 'maintenance.svg', 'mur.svg'],
    },
    {
      number: '205',
      type: 'Deluxe',
      statusClass: 'dirty',
      iconsTop: ['departure.svg', 'guest.svg', 'arrival.svg'],
      iconsBottom: ['guest-req.svg', 'maintenance.svg', 'dnd.svg'],
    },
    {
      number: '206',
      type: 'Deluxe',
      statusClass: 'dirty',
      iconsTop: ['departure.svg', 'guest.svg', 'arrival.svg'],
      iconsBottom: ['guest-req.svg', 'maintenance.svg', 'dnd.svg'],
    }
  ];

  // Toggle floor expand/collapse
  toggleFloor(floorNumber: number) {
    if (floorNumber === 1) {
      this.floor1Expanded = !this.floor1Expanded;
    } else {
      this.floor2Expanded = !this.floor2Expanded;
    }
  }
}
