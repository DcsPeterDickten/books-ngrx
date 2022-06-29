import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  save(book: Book): Observable<Book> {
    // console.log({book});
    return this.http.post<Book>(`http://localhost:4000/books`, book)
  }
}
