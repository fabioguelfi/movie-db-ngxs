// Angular standard
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

// Router Config
import { ROUTES } from './router.config';

// Components
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CardMovieComponent } from './home/card-movie/card-movie.component';
import { WrapperHomeComponent } from './home/wrapper-home/wrapper-home.component';
import { FooterComponent } from './components/footer/footer.component';

// Modules
import { MaterialModule } from './material/material.module';
import { FindComponent } from './home/find/find.component';
import { HttpClientModule } from '@angular/common/http';

// Ngxs
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { AuthState } from './store/state/auth.state';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ToolbarComponent,
    FooterComponent,
    WrapperHomeComponent,
    FindComponent,
    CardMovieComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    MaterialModule,
    HttpClientModule,
    NgxsModule.forRoot([
      AuthState
    ]),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
