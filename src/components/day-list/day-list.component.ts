import { Component, computed, effect, inject } from '@angular/core';
import { WeatherDay } from 'src/interfaces';
import { WeatherCardComponent } from 'src/components/weather-card/weather-card.component';
import { ShareDataService } from 'src/services/share-data.service';

@Component({
  imports: [WeatherCardComponent],
  selector: 'day-list',
  standalone: true,
  styleUrls: ['./day-list.component.css'],
  templateUrl: './day-list.component.html',
})
export class DayListComponent {
  errorMessages: string[] = [];
  days: Array<WeatherDay> = [];

  sharedDataService = inject(ShareDataService);

  errorCount = computed(() => this.sharedDataService.getError().length);
  cardCount = computed(() => this.sharedDataService.getDays().length);

  constructor() {
    effect(() => {
      this.errorMessages = this.sharedDataService.getError();
      this.days = this.sharedDataService.getDays();

      console.log('DATA', this.days);
    });
  }
}
