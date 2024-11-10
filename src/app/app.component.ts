import { Component } from '@angular/core';
import { CityInputComponent } from 'src/components/city-input/city-input.component';
import { DayListComponent } from 'src/components/day-list/day-list.component';
import { HeaderComponent } from 'src/components/header/header.component';

@Component({
  imports: [CityInputComponent, DayListComponent, HeaderComponent],
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'weather-app';
}
