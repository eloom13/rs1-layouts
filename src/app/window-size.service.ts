import { Injectable, Inject, PLATFORM_ID  } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class WindowSizeService {

  private windowWidthSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Provjera da li smo u pretraživaču
    if (isPlatformBrowser(this.platformId)) {
      // Postavi početnu širinu prozora
      this.windowWidthSubject.next(window.innerWidth);
      // Dodavanje event listener-a za resize
      window.addEventListener('resize', this.onResize.bind(this));
    }
  }

  public windowWidth$ = this.windowWidthSubject.asObservable(); 

  private onResize() {
    // Postavljanje nove širine prozora prilikom promjene veličine
    this.windowWidthSubject.next(window.innerWidth);
  }
}
