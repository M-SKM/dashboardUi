import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DashboardApiService {

  constructor(
    private http: HttpClient
  ) { }

  getData(): any {
    return this.http.get('https://1.api.fy23ey05.careers.ifelsecloud.com/');
  }

}
