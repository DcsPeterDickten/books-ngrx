import { filter, map, timer } from 'rxjs';

// const obs1$ = of(42, 43, 44);
// const obs2$ = from([1, 2, 3]);
const obs3$ = timer(0, 500); // läuft endlos

// obs1$.subscribe(console.log);
// obs2$.subscribe(console.log);

obs3$.pipe(
    filter((x) => x % 2 === 0), // nur gerade
    map((x) => x * 10)          // ver-10-fachen
).subscribe(
    console.log
);