import { Injectable } from '@angular/core';
import { Subject , Observable }    from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class EventService {
	filterAdded$;
	filterAddedSubject = new Subject();

  filterRemoved$;
  filterRemovedSubject = new Subject();
  constructor() {
    console.log('Hello EventService Provider');
 	this.filterAdded$ = this.filterAddedSubject.asObservable();
  this.filterRemoved$ = this.filterRemovedSubject.asObservable();

  }
  filterAdded(filter: any) {
    this.filterAddedSubject.next(filter);
  }
  filterRemoved(filter: any) {
    this.filterRemovedSubject.next(filter);
  }
  

}
