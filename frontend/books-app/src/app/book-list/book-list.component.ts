import { Component, OnInit } from '@angular/core';
import { interval, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'books-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  private destroy$ = new Subject<string>();

  ngOnInit(): void {
    interval(1000).pipe(
      takeUntil(this.destroy$)
    ).subscribe(x => console.log(x));
  }

  ngOnDestroy(): void {
    this.destroy$.next("he's dead, Jim");
  }
}
