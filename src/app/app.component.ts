import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.onLoad();
  }

  constructor(private http: HttpClient) {}

  onLoad() {
    this.http
      .get<any>(`http://localhost:8080/MTShopAdmin/users`)
      .subscribe((response) => {
        console.log('x', response);
      });
  }
}
