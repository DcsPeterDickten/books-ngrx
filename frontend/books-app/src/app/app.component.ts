import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import produce from 'immer';
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

    const buch = {
      isbn: "42",
      title: "NgRx im Wechsel der Jahreszeiten",
      available: false
    };
    console.log({buch});

    const buch2 = produce(buch, (draft) => {
      draft.available = true;
    });

    console.log({buch2});

  }

  // increment() {
  //   this.store.dispatch(increment()); // Action
  // }

  // decrement() {
  //   this.store.dispatch(decrement()); // Action
  // }

  // reset() {
  //   this.store.dispatch(reset()); // Action
  // }
}
