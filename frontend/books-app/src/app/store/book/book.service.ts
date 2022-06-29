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
    return this.http.post<Book>(`http://localhost:3000/books`, book)
  }
}
