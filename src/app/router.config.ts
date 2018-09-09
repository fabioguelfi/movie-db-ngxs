import { WrapperHomeComponent } from './home/wrapper-home/wrapper-home.component';
import { AppComponent } from './app.component';
import { Route } from "@angular/router";

export const ROUTES: Route[] = [
    { path: '', component: AppComponent },
    { path: 'home', component: WrapperHomeComponent },
    { path: '**', redirectTo: '' }
]