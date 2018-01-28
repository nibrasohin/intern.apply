import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InternApiService } from './shared/services/intern-api/intern-api.service';
import { JobFormComponent } from './job-form/job-form.component';
import { AddJobComponent } from './add-job/add-job.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PageNotFoundComponent,
    JobFormComponent,
    AddJobComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    BsDropdownModule.forRoot()
  ],
  providers: [
    InternApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
