import {Component} from '@angular/core';
import {Background} from './background/background';
import {PrimeNG} from 'primeng/config';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Background, RouterOutlet],
  templateUrl: './app.html',
})
export class App {

  constructor(private primeNG: PrimeNG) {
    this.primeNG.ripple.set(true);
  }
}
