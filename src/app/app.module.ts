import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StockTrackerListComponent } from './stock/stock-tracker-list/stock-tracker-list.component';
import { StockTrackerDetailComponent } from './stock/stock-tracker-detail/stock-tracker-detail.component';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import { SentimentComponent } from './sentiment/sentiment.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    StockTrackerListComponent,
    StockTrackerDetailComponent,
    SentimentComponent,
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
