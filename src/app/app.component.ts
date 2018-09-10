import { OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';
import { tap, finalize, retry, debounceTime } from 'rxjs/operators';
import { noop } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(protected authService: AuthService) { }

  public ngOnInit(): void {
    this.authService.authenticationToken()
      .pipe(
        retry(7),
        debounceTime(500),
        tap((token) => this.updateStateRequestToken(token))
      ).subscribe(noop, noop, noop)
  }

  private updateStateRequestToken(token: any): void {
    debugger
  }

}
