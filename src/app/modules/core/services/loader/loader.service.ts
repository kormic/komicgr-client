import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loaderIsVisible = new BehaviorSubject(false);
  $loaderVisibility = this.loaderIsVisible.asObservable();

  constructor() { }

  showLoader() {
    this.loaderIsVisible.next(!this.loaderIsVisible.getValue());
  }

  hideLoader() {
    this.loaderIsVisible.next(!this.loaderIsVisible.getValue());
  }
}
