import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from "../../services/local-storage.service";
import {FinhubService} from "../../services/finhub.service";
import {Stock} from "../../models/stock";
import {Quote} from "../../models/quote";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {map, Observable, of, switchMap} from "rxjs";

@Component({
    selector: 'stock-tracker-list',
    templateUrl: './stock-tracker-list.component.html',
    styleUrls: ['./stock-tracker-list.component.scss'],
})
export class StockTrackerListComponent implements OnInit {
    private readonly STOCKS_KEY = 'stocks';
    public isSearchedId = false;
    public stocks: Stock[] = [];

    public symbolForm: FormGroup;

    constructor(private localStorageService: LocalStorageService, private formBuilder: FormBuilder,
                private finhubService: FinhubService) {
        this.symbolForm = this.formBuilder.group({
            stockId: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(1)]]
        });
    }

    public ngOnInit() {
        this.populateListFromLocalStorage();
    }

    public populateListFromLocalStorage() {
        let stockIds: string[] = this.localStorageService.getItemsFromLocalStorage(this.STOCKS_KEY) ?? [];
        stockIds.forEach((stockId: string) => {
            this.getStockData(stockId).subscribe((stock: Stock) => {
                this.stocks.push(stock);
            })
        })
    }

    public getStockData(stockId: string): Observable<Stock> {
        return this.finhubService.getCompanyName(stockId).pipe(switchMap((nameStock: string) => {
            if (!nameStock) {
                return of();
            }
            return this.finhubService.getQuote(stockId).pipe(map((quote: Quote) => {
                return {
                    id: stockId,
                    name: nameStock,
                    quote: quote
                } as Stock;
            }))
        }));
    }

    public searchId(): void {
        const stockId = this.symbolForm.value.stockId.toUpperCase();

        if (this.stocks.filter(stock => stock.id == stockId).length) {
            return;
        }

        this.localStorageService.setItemToLocalStorage(this.STOCKS_KEY, stockId);
        this.getStockData(stockId).subscribe((stock: Stock) => {
            this.stocks.push(stock)
        })

        this.symbolForm.reset();
        this.isSearchedId = true;
    }

    public deleteStock(id: string): void {
        this.stocks = this.stocks.filter(stock => stock.id != id);
        this.localStorageService.removeItemFromLocalStorage(this.STOCKS_KEY, id);
    }
}
