import { Component, OnInit, inject } from '@angular/core';
import { DashboardApiService } from './dashboard-api.service';
import { ApiData, RecentOrders, newUser, topCard } from './model';


@Component({
  selector: 'app-root',
  template: `
  <app-left-navigation></app-left-navigation>

<section id="content">

  <app-top-navigation></app-top-navigation>

  <main class="main">
    <app-top-card [card_data]="top_cards"></app-top-card>
    <div class="flex-2-col">
      <app-recent-order [recent_orders]="recent_orders"></app-recent-order>
      <app-new-user [new_users]="newUsers"></app-new-user>
    </div>
    <app-bottom-section></app-bottom-section>
  </main>
</section>
  `,
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  title = 'taskUi';
  top_cards: topCard[] = [];
  newUsers: newUser[] = [];
  recent_orders: RecentOrders[] = [];
  DashboardApiService: DashboardApiService = inject(DashboardApiService);
  ngOnInit(): void {
    this.DashboardApiService.getData().subscribe((data: ApiData) => {
      this.top_cards = data.top_cards;
      this.recent_orders = data.recent_orders;
      this.newUsers = data.new_users;
    })
  }
}
