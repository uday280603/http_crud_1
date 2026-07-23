import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  private isLoding$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isLodingObs$ = this.isLoding$.asObservable();

  constructor() {}

  emitLodingFlag(flag: boolean) {
    console.log('SpinnerService:', flag);
    this.isLoding$.next(flag);
  }
}
