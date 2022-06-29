import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { RootState } from '../store';
import * as BooksActions from '../store/book/book.actions';

@Component({
  selector: 'books-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  form: FormGroup;

  constructor(private store: Store<RootState>, private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ["", Validators.required],
      isbn: ["", Validators.required],
      author: ["", Validators.required],
      category: ["tech", Validators.required],
    });
  }
  ngOnInit(): void {
  }

  submit() {
    const id = 41;
    const book = { ...this.form.value, id };
    // console.log(book);
    this.store.dispatch(BooksActions.neuesBuch({ book }));
  }
}

