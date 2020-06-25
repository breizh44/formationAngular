import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalModule } from './animal/animal.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [BrowserModule,AppRoutingModule,HttpClientModule,AnimalModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
