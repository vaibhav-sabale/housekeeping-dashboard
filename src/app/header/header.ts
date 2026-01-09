import { Component, OnInit } from '@angular/core';
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
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { MeterGroup } from 'primeng/metergroup';


interface KPI {
  title: string;
  value: string;
  chipClass: string;
  chipText: string;
  note: string;
  icon: string;
}

interface Item {
  cssClass: string;
  label: string;
}


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, DatePicker, FormsModule, SelectButton, ToolbarModule, CardModule, IconFieldModule, InputIconModule, InputIcon, IconField, InputTextModule, ButtonModule, ChartModule, MeterGroup],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {

  selectedDate: Date = new Date();

  stateOptions: any[] = [{ label: 'Overview', value: 'overview' }, { label: 'Chart View', value: 'chart-view' }];

  value: string = 'overview';

  kpis: KPI[] = [
    { title: 'Arrival', value: '42', chipClass: 'kpi-chip--pos', chipText: '+2.0%', note: 'From last week', icon: 'arrival.svg' },
    { title: 'Departure', value: '42', chipClass: 'kpi-chip--neg', chipText: '-2.1%', note: 'From last week', icon: 'departure.svg' },
    { title: 'Guest Request', value: '42', chipClass: 'kpi-chip--pos', chipText: '4.5 min', note: 'Avg. service time', icon: 'guest-request.svg' }
  ];

  items: Item[] = [
    { cssClass: 'dirty', label: 'Dirty' },
    { cssClass: 'inprogress', label: 'In Progress' },
    { cssClass: 'inspect', label: 'Inspect' },
    { cssClass: 'cleaned', label: 'Cleaned' },
    { cssClass: 'out', label: 'Out of Service' },
    { cssClass: 'order', label: 'Out of Order' }
  ];

  data: any;
  options: any;
  plugins: any[] = [];

  ngOnInit() {

    const centerTextPlugin = {
      id: 'centerText',
      beforeDraw: (chart: any) => {
        const { ctx, chartArea } = chart;
        if (!chartArea) return;

        const text = `${chart.data.datasets?.[0]?.data?.[0] ?? 0}%`;
        const x = (chartArea.left + chartArea.right) / 2;
        const y = (chartArea.top + chartArea.bottom) / 2;

        ctx.save();
        ctx.font = '600 .9rem  DM Sans';
        ctx.fillStyle = '#FFFFFF';
        ctx.textAlign = 'center';
        ctx.fillText(text, x, y);
        ctx.restore();
      }
    };

    this.plugins = [centerTextPlugin];

    this.data = {
      datasets: [{
        data: [25, 75],
        backgroundColor: ['#E8E9EA', '#87AEDD'],
        borderWidth: 0,
        borderRadius: 8
      }]
    };

    this.options = {
      cutout: '80%',
    }
  }


  //progress bar
  progressValue = [
    { label: 'Dirty', color: '#FF3B30', value: 20, icon: 'pi pi-minus' },
    { label: 'In Progress', color: '#FF9500', value: 14, icon: 'pi pi-minus' },
    { label: 'Inspect', color: '#34C759', value: 52, icon: 'pi pi-minus' },
    { label: 'Cleaned', color: '#509CEF', value: 10, icon: 'pi pi-minus' },
    { label: 'Out of Service', color: '#74748F', value: 3, icon: 'pi pi-minus' },
    { label: 'Out of Order', color: '#505064', value: 1, icon: 'pi pi-minus' }
  ];
  

}
