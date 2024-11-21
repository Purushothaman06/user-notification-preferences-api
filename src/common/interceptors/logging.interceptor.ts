import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const method = request.method;
    const url = request.url;
    const timestamp = new Date().toISOString();

    console.log(`[${timestamp}] ${method} ${url} - Request received`);

    return next.handle().pipe(
      tap(() => {
        console.log(`[${timestamp}] ${method} ${url} - Response sent`);
      }),
    );
  }
}
