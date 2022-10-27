import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LocalStorageService} from "../../services/local-storage.service";
import {FinhubService} from "../../services/finhub.service";
import {Stock} from "../../models/stock";
import {Qoute} from "../../models/qoute";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'stock-tracker-list',
    templateUrl: './stock-tracker-list.component.html',
    styleUrls: ['./stock-tracker-list.component.css'],
})
export class StockTrackerListComponent implements OnInit {
    private readonly STOCK_KEY = 'stocks';
    @Output() searchedIdEvent = new EventEmitter<string>();

    public symbolForm: FormGroup;

    constructor(private localStorageService: LocalStorageService, private formBuilder: FormBuilder) {
        this.symbolForm = this.formBuilder.group({
            stockId: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(1)]]
        });
    }

    public ngOnInit() {
        //this.initializeCurrentStock();
    }

    /*public initializeCurrentStock(): void {
        this.currentStock = {
            id: '',
            name: '',
            currentPrice: 0,
            changeToday: 0,
            openingPrice: 0,
            highPrice: 0
        }
    }*/

   /* public trackSymbol(stockId: string): void {
        this.localStorageService.setItemToLocalStorage(this.STOCK_KEY, stockId);
        this.currentStock.id = stockId;
        this.populateNameData(stockId);
        this.populateQuoteData(stockId);
        this.isSubmitted = true;
    }

    public populateNameData(stockId: string): void {
        this.finhubService.getCompanyName(stockId).subscribe((data: string) => {
            console.log('DATA', data);
            console.log(this.currentStock);
            this.currentStock.name = data;
        })
    }

    public populateQuoteData(stockId: string): void {
        this.finhubService.getQuote(stockId).subscribe((data: Qoute) => {
            this.currentStock.currentPrice = data.c;
            this.currentStock.changeToday = data.dp;
            this.currentStock.highPrice = data.h;
            this.currentStock.openingPrice = data.o;
        })
    }*/

    public searchId(): void {
        this.searchedIdEvent.emit(this.symbolForm.value.stockId.toUpperCase());
        this.symbolForm.reset();
    }
}
