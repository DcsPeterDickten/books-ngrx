import { Subject } from 'rxjs';

const mySubject$ = new Subject();

mySubject$.next('Jemand zuhause?');

mySubject$.subscribe(e => console.log(e));
mySubject$.subscribe(e => console.log(e));

mySubject$.next('Hallo');
mySubject$.next('Welt :-) ');