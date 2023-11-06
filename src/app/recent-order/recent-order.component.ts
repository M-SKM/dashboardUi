import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recent-order',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="card-style">
  <div class="title-section">
    <h5 class="sub-title">{{title}}</h5>
  </div>
  <div class="table_scroll">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Customer</th>
          <th scope="col">Products</th>
          <th scope="col">Delivery Date</th>
          <th scope="col">Status</th>
          <th scope="col">Tracking Date</th>
          <th scope="col">Shipping</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of recent_orders;let i=index">
          <td scope="row">{{i+1|number:'2.0'}}</td>
          <td scope="row">{{data.name}}</td>
          <td scope="row">{{data.product}}</td>
          <td scope="row">{{data.delivery_date|date}}</td>
          <td class="text-center"><span [class]="'badge  '+getStatusClass(data.status)">{{data.status}}</span>
          </td>
          <td class="text-center">#{{data.tracking_no}}</td>
          <td class="text-center">{{data.shipping?'Yes':"No"}}</td>
          <td>
            <a data-bs-toggle="modal" href="#showPopup" (click)="openPopup(data.id)"><i class="fa fa-times"></i></a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
<div class="modal" id="showPopup" tabindex="-1" role="dialog">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-body text-center">
        <h4 class="sub-title mb-0">{{PopupData?.name}}</h4>
        <span class="text_desc mt-3">{{PopupData?.product}}</span>
      </div>

    </div>
  </div>
</div>
  `,
  styleUrls: ['./recent-order.component.scss']
})
export class RecentOrderComponent {
  @Input() recent_orders: any = '';

  PopupData: any;

  title: string = "Recent Orders";

  getStatusClass(value: string) {
    if (value == 'Paid') {
      return 'text-bg-paid'
    }
    else if (value == 'Pending') {
      return 'text-bg-pending';
    }
    else {
      return 'text-bg-failed';
    }
  }
  openPopup(id: any) {
    this.PopupData = this.recent_orders.find((x: any) => x.id == id);

  }
}
