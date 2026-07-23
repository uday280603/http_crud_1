import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { SpinnerService } from './spinner.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterCeptor implements HttpInterceptor {

  private _spinnerService = inject(SpinnerService)

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._spinnerService.emitLodingFlag(true);

    if(req.url.includes('login') || req.url.includes('signup')){
      return next.handle(req)
                      .pipe(
                        finalize(() =>{
                          this._spinnerService.emitLodingFlag(false);
                        })
                      )
    }


    const reqClone = req.clone({
      setHeaders : {
        "Content-type":'application/json',
        "auth":"Tonken from Ls"
      }
    })
    return next.handle(reqClone) .pipe(
                        finalize(() =>{
                          this._spinnerService.emitLodingFlag(false);
                        })
                      )
  }
}
