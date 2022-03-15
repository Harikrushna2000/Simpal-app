import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEzfQ.7spIYNdJMrCvzd8kzib7oQa0QS3zKSO6IkM_pSnKzYg';

    console.log('within Interceptor !!');

    return next.handle(
      request.clone({
        setHeaders: { 'user-jwt': token },
      })
    );
  }
}
