import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { newUser } from '../model';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="card-style">
  <div class="title-section">
    <h6 class="sub-title">{{title}}</h6>
  </div>
  <div class="card-content">
    <div class="card-info" *ngFor="let data of new_users;let i=index">
      <div class="user-img">
        <img [src]="data.picture" class="img-fluid avatar" />
        <span [class]="(data.isActive)?'dot active':'dot'"></span>
      </div>
      <div class="user-info">
        <h6 class="">{{data.name}}</h6>
        <span class="">{{data.country}}</span>
      </div>
      <div class="percentage">
        <div [class]="'bar '+getBarColor(data.progress)" [style.width]="data.progress+'px'">
          <span>{{data.progress}}%</span>
        </div>
      </div>
      <div class="action-btn">
        <button class="button">More</button>
      </div>
    </div>

  </div>
</div>`,
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent {
  @Input() new_users: newUser[] = [];
  title: string = "New User Registration";
  getBarColor(value: any) {
    value = parseInt(value)
    if (value >= 85) {
      return '_85-progrees-color';
    }
    else if (value >= 45) {
      return '_45-progrees-color';
    }
    else if (value >= 40) {
      return '_40-progrees-color';
    }
    else if (value >= 30) {
      return '_30-progrees-color';
    }
    else {
      return '_20-progrees-color';
    }
  }
}
