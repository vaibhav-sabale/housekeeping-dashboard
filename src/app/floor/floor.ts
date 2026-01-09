import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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

interface Floor {
  id: string;
  floorNumber: number;
  totalRooms: number;
  cleaned: number;
  dirty: number;
  inspect: number;
  rooms: Room[];
}

@Component({
  selector: 'app-floor',
  standalone: true,
  imports: [CommonModule, AccordionModule, CardModule],
  templateUrl: './floor.html',
  styleUrls: ['./floor.css'],
})

export class FloorComponent {
  activeIndex = ['0'];

  floors: Floor[] = [
    {
      id: '0', floorNumber: 1, totalRooms: 10, cleaned: 5, dirty: 3, inspect: 2,
      rooms: [
        { number: '101', type: 'Deluxe', statusClass: 'cleaned', iconsTop: ['departure.svg', 'guest.svg', 'arrival.svg'], iconsBottom: ['guest-req.svg', 'maintenance.svg', 'dnd.svg'] },
        { number: '102', type: 'Deluxe', statusClass: 'dirty', iconsTop: ['departure.svg', 'guest.svg', 'arrival.svg'], iconsBottom: ['guest-req.svg', 'maintenance.svg'] },
        { number: '103', type: 'Deluxe', statusClass: 'inspect', iconsTop: ['departure.svg', 'guest.svg', 'arrival.svg'], iconsBottom: ['guest-req.svg', 'maintenance.svg'] },
        { number: '104', type: 'Deluxe', statusClass: 'cleaned', iconsTop: ['departure.svg', 'guest.svg', 'arrival.svg'], iconsBottom: ['guest-req.svg', 'maintenance.svg', 'dnd.svg'] },
        { number: '105', type: 'Deluxe', statusClass: 'dirty', iconsTop: ['departure.svg', 'guest.svg', 'arrival.svg'], iconsBottom: ['guest-req.svg', 'maintenance.svg', 'dnd.svg'] },
        { number: '106', type: 'Deluxe', statusClass: 'dirty', iconsTop: ['departure.svg', 'guest.svg', 'arrival.svg'], iconsBottom: ['guest-req.svg', 'maintenance.svg', 'dnd.svg'] },
        { number: '107', type: 'Deluxe', statusClass: 'cleaned', iconsTop: ['departure.svg', 'guest.svg', 'arrival.svg'], iconsBottom: ['guest-req.svg', 'maintenance.svg'] },
        { number: '108', type: 'Deluxe', statusClass: 'cleaned', iconsTop: ['departure.svg', 'guest.svg', 'arrival.svg'], iconsBottom: ['guest-req.svg', 'maintenance.svg'] },
        { number: '109', type: 'Deluxe', statusClass: 'inspect', iconsTop: ['departure.svg', 'guest.svg', 'arrival.svg'], iconsBottom: ['guest-req.svg', 'maintenance.svg', 'dnd.svg'] },
        { number: '110', type: 'Deluxe', statusClass: 'cleaned', iconsTop: ['departure.svg', 'guest.svg', 'arrival.svg'], iconsBottom: ['guest-req.svg', 'maintenance.svg', 'dnd.svg'] }
      ]
    },
    {
      id: '1', floorNumber: 2, totalRooms: 6, cleaned: 2, dirty: 3, inspect: 1,
      rooms: [
        { number: '201', type: 'Deluxe', statusClass: 'cleaned', iconsTop: ['departure.svg', 'guest.svg', 'arrival.svg'], iconsBottom: ['guest-req.svg', 'maintenance.svg', 'mur.svg'] },
        { number: '202', type: 'Deluxe', statusClass: 'dirty', iconsTop: ['departure.svg', 'guest.svg', 'arrival.svg'], iconsBottom: ['guest-req.svg', 'maintenance.svg'] },
        { number: '203', type: 'Deluxe', statusClass: 'inspect', iconsTop: ['departure.svg', 'guest.svg', 'arrival.svg'], iconsBottom: ['guest-req.svg', 'maintenance.svg'] },
        { number: '204', type: 'Deluxe', statusClass: 'cleaned', iconsTop: ['departure.svg', 'guest.svg', 'arrival.svg'], iconsBottom: ['guest-req.svg', 'maintenance.svg', 'mur.svg'] },
        { number: '205', type: 'Deluxe', statusClass: 'dirty', iconsTop: ['departure.svg', 'guest.svg', 'arrival.svg'], iconsBottom: ['guest-req.svg', 'maintenance.svg', 'dnd.svg'] },
        { number: '206', type: 'Deluxe', statusClass: 'dirty', iconsTop: ['departure.svg', 'guest.svg', 'arrival.svg'], iconsBottom: ['guest-req.svg', 'maintenance.svg', 'dnd.svg'] }
      ]
    }
  ];
}