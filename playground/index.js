import { BehaviorSubject } from 'rxjs';
import { ReplaySubject } from 'rxjs';

const mySubject$ = new ReplaySubject(5);

mySubject$.next('jemand zuhause?');
mySubject$.next('wirklich?');

mySubject$.subscribe(e => console.log(1, e));
mySubject$.subscribe(e => console.log(2, e));

mySubject$.next('na klar');
