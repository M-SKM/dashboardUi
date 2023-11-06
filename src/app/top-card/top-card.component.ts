import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { topCard } from '../model';


@Component({
  selector: 'app-top-card',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="dashboard-card-list">
  <div class="dashboard-card" *ngFor="let data of card_data;let i=index ">
    <div class="icon">
      <i [class]="'fa '+Icons[i]"></i>
    </div>
    <div class="info">
      <h1 class="value">{{data.value}}%</h1>
      <span class="header-content">
        {{data.header}}
      </span>
      <span class="sub-header">{{data.sub_header}}</span>
    </div>
  </div>
</div>
  `,
  styleUrls: ['./top-card.component.scss']
})
export class TopCardComponent implements OnInit {

  Icons: string[] = ['fa-music', 'fa-chart-pie', 'fa-download', 'fa-rotate'];
  @Input() card_data: topCard[] = [];
  constructor() {
  }
  ngOnInit(): void {
    // console.log(this.card_data)
    // throw new Error('Method not implemented.');
  }


}
