import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'books-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'books-app';

  count$: Observable<number> = of(0);
  constructor() { }
  increment() { }
  decrement() { }
  reset() { }
}
