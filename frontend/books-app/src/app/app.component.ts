import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { increment, decrement, reset } from './counter/counter.actions';

@Component({
  selector: 'books-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count$: Observable<number> = of(0);

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count'); // Selektor
  }

  increment() {
    this.store.dispatch(increment()); // Action
  }

  decrement() {
    this.store.dispatch(decrement()); // Action
  }

  reset() {
    this.store.dispatch(reset()); // Action
  }
}
