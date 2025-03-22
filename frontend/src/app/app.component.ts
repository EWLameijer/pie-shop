import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PieService } from './pie.service';

@Component({
  selector: 'pies-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'Welcome to my Pie Shop!';
  pieOfTheDay: string = '';

  constructor(pieService: PieService) {
    pieService
      .fetchPie()
      .subscribe((pie) => (this.pieOfTheDay = pie.description));
  }
}
