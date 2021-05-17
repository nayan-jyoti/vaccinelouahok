import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompDataSelectComponent } from './comp-data-select/comp-data-select.component';
import { CompDataShowComponent } from './comp-data-show/comp-data-show.component';
import { CompHomeComponent } from './comp-home/comp-home.component';
import { CompInvalidUrlComponent } from './comp-invalid-url/comp-invalid-url.component';

@NgModule({
  declarations: [
    AppComponent,
    CompDataSelectComponent,
    CompDataShowComponent,
    CompHomeComponent,
    CompInvalidUrlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
