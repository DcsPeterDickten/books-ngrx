import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'books-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  private mySubscription: any;

  ngOnInit(): void {
    this.mySubscription = interval(1000).subscribe(x => console.log(x));
  }

  ngOnDestroy(): void {
    this.mySubscription.unsubscribe();
  }
}
