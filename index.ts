import { range, of } from 'rxjs'
import { flatMap, delay} from 'rxjs/operators';

console.log('Start');
range(1,10)
.pipe(
  flatMap(res => 
    of(res).pipe(delay(Math.floor(Math.random() * 1000) + 600)))
).subscribe(data => console.log(data))
