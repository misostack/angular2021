import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorService implements ErrorHandler{

  constructor(private injector: Injector) { }
  handleError(error: any): void {
    // ignore http error : this one will be handler by interceptor
    // const router = this.injector.get('router');
    if(!(error instanceof HttpErrorResponse)) {
      console.error("[ApplicationError]", error);
    }
    
  }
}
