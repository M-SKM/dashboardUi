import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardApiService } from '../dashboard-api.service';
@Component({
  selector: 'app-top-navigation',
  standalone: true,
  imports: [CommonModule],
  template: `
  <nav>
  <form action="#">
    <div class="form-input">
      <i class="fa fa-search"></i>
      <input type="search" placeholder="Search..." />
    </div>
  </form>
  <a class="nav-link">
    <span class="mx-2">ENG</span>
    <i class="fa fa-caret-down fs-6"></i>
  </a>
  <a class="nav-link">
    <i class="fa fa-comment"></i>
    <span class="dot"></span>
  </a>
  <a class="nav-link">
    <i class="fa fa-bell"></i>
    <span class="dot"></span>
  </a>
  <a class="nav-link profile">
    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" class="img-fluid avatar" />
    <span class="user-name">Sample User</span>
    <i class="fa fa-caret-down fs-6"></i>
  </a>
</nav>
  `,
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {



  constructor() { }

  ngOnInit() {

  }
}
