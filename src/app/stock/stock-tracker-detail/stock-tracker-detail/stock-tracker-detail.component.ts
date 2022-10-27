import {Component, Input, OnInit} from '@angular/core';
import {FinhubService} from "../../../services/finhub.service";
import {Stock} from "../../../models/stock";

@Component({
    selector: 'stock-tracker-detail',
    templateUrl: './stock-tracker-detail.component.html',
    styleUrls: ['./stock-tracker-detail.component.css']
})
export class StockTrackerDetailComponent implements OnInit {

    @Input()
    public stock: Stock;


    constructor(private finhubService: FinhubService) {
    }

    ngOnInit() {

    }


}