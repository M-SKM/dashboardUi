import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { LeftNavigationComponent } from './left-navigation/left-navigation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TopCardComponent } from './top-card/top-card.component';
import { HttpClientModule } from '@angular/common/http';
import { RecentOrderComponent } from './recent-order/recent-order.component';
import { NewUserComponent } from './new-user/new-user.component';
import { BottomSectionComponent } from './bottom-section/bottom-section.component';
import { NgChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TopNavigationComponent,
    LeftNavigationComponent,
    FontAwesomeModule,
    TopCardComponent,
    TopNavigationComponent,
    HttpClientModule,
    RecentOrderComponent,
    NewUserComponent,
    BottomSectionComponent,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
