import { BehaviorSubject } from 'rxjs';

const mySubject$ = new BehaviorSubject('Jemand zuhause?');

mySubject$.subscribe(e => console.log(1, e));

// next() überschreibt den Startwert
mySubject$.next('ich glaube schon');

mySubject$.subscribe(e => console.log(2, e));

mySubject$.next('na klar');
