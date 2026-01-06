import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgClass } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';

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
  imports: [CommonModule, NgClass, AccordionModule, CardModule],
  templateUrl: './floor.html',
  styleUrls: ['./floor.css'],
})
export class FloorComponent {

  activeIndex: string[] = ['0'];

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
}