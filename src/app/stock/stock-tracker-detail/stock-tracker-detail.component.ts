import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Stock} from "../../models/stock";
import {Router} from "@angular/router";


@Component({
    selector: 'stock-tracker-detail',
    templateUrl: './stock-tracker-detail.component.html',
    styleUrls: ['./stock-tracker-detail.component.scss']
})
export class StockTrackerDetailComponent implements OnInit {

    @Input()
    public stock: Stock;

    @Output()
    public deleted: EventEmitter<string> = new EventEmitter<string>();

    constructor(private router: Router) {
    }

    ngOnInit() {

    }

    public deleteStock() {
        this.deleted.emit(this.stock.id)
    }

    public navigateToSentiment(id: string): void {
        this.router.navigate(['/sentiment', id]);
    }

}