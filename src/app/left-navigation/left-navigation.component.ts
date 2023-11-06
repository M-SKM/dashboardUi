import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-left-navigation',
  standalone: true,
  imports: [CommonModule],
  template: `
  <section id="sidebar">
  <a href="#" class="brand">
    <i class="fa fa-bars"></i>
  </a>
  <ul class="side-menu top">
    <li class="">
      <a href="#">
        <i class="fa fa-inbox" aria-hidden="true"></i>
      </a>
    </li>
    <li>
      <a href="#" class="active">
        <i class="fa fa-bar-chart" aria-hidden="true"></i>
      </a>
    </li>
    <li>
      <a href="#">
        <i class="fa fa-copy" aria-hidden="true"></i>
      </a>
    </li>
    <li>
      <a href="#">
        <i class="fa fa-check" aria-hidden="true"></i>
      </a>
    </li>
    <li>
      <a href="#">
        <i class="fa fa-gear" aria-hidden="true"></i>
      </a>
    </li>
    <li>
      <a href="#">
        <i class="fa fa-download" aria-hidden="true"></i>
      </a>
    </li>
  </ul>
</section>
  `,
  styleUrls: ['./left-navigation.component.scss']
})
export class LeftNavigationComponent {

}
