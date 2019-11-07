import { BrowserModule,Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { OverlayModule } from '@angular/cdk/overlay';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { Router, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { UIService } from "./services/ui.service";
import { JwtInterceptor } from './services/jwt.interceptor';
import { ErrorInterceptor } from './services/authentication.interceptor';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    LayoutModule,
    OverlayModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [Title,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private router: Router, private uiService:UIService){
    router.events.subscribe(event=>{

      if(event instanceof NavigationStart ){
        this.uiService.showLoader();
      }

      if (event instanceof NavigationEnd) {
        this.uiService.hideLoader();
      }

      if (event instanceof NavigationError) {
        this.uiService.hideLoader();
      }

    });
  }
}
