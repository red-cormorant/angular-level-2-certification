import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StockTrackerListComponent} from "./stock/stock-tracker-list/stock-tracker-list.component";
import {SentimentComponent} from "./sentiment/sentiment.component";

const routes: Routes = [
  {path: '', component: StockTrackerListComponent},
  {path: 'sentiment/:id', component: SentimentComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
