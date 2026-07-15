import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostDashboardComponent } from './shared/component/Post/post-dashboard/post-dashboard.component';
import { PostDetailsComponent } from './shared/component/Post/post-details/post-details.component';
import { PostFormComponent } from './shared/component/Post/post-form/post-form.component';
import { HomeComponent } from './shared/component/Basic/home/home.component';
import { NavbarComponent } from './shared/component/Basic/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/module/material.module';
import { GetConfirmComponent } from './shared/component/Basic/get-confirm/get-confirm.component';



@NgModule({
  declarations: [
    AppComponent,
    PostDashboardComponent,
    PostDetailsComponent,
    PostFormComponent,
    HomeComponent,
    NavbarComponent,
    GetConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
