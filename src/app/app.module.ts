import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthenticationService } from './api/authentication.service';
import { TestingInterceptor } from './api/testing.interceptor';
import { SweepblocksComponent } from './components/sweepblocks/sweepblocks.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';
import { InputComponent } from './shared/input/input.component';
import { ButtonComponent } from './shared/button/button.component';
import { ToastrModule} from 'ngx-toastr';
import { ConfirmationService} from 'primeng/api';
import { MessageService } from 'primeng/api';
import { PrimemodulesModule } from './primeui/primemodules/primemodules.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';





  

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    DashboardPageComponent,
    SweepblocksComponent,
    SubjectsComponent,
    InputComponent,
    ButtonComponent,
    SidenavComponent,
    DropdownComponent
  
    
  
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    PrimemodulesModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    FontAwesomeModule
  

  ],
  providers: [AuthenticationService,ConfirmationService,MessageService,{
    provide : HTTP_INTERCEPTORS,
    useClass:TestingInterceptor,
    multi:true

  },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
