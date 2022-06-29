import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private URL = 'http://localhost:4000/books';

  constructor(private http: HttpClient) { }

  save(book: Book): Observable<Book> {
    return this.http.post<Book>(this.URL, book)
  }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(this.URL);
  }
}
