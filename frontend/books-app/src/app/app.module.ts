import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookListComponent } from './book-list/book-list.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { modules } from './modules';
import { reducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './store/book/book.effects';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookDetailsComponent,
    CreateBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    ReactiveFormsModule,
    modules,
    EffectsModule.forRoot([BookEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
