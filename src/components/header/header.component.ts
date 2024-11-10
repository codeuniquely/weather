import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  styleUrls: ['./header.component.css'],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Input() title: string = '';
}
