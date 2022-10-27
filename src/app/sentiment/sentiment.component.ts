import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MonthHistory} from "../models/month-history";
import {map, Observable} from "rxjs";
import {FinhubService} from "../services/finhub.service";
import {formatDate} from "@angular/common";

@Component({
    selector: 'app-sentiment',
    templateUrl: './sentiment.component.html',
    styleUrls: ['./sentiment.component.scss']
})
export class SentimentComponent implements OnInit {
    public symbol: string = '';
    public stockName: string = '';
    public history: MonthHistory[] = [];

    public months = [
        'january',
        'february',
        'march',
        'april',
        'may',
        'june',
        'july',
        'august',
        'september',
        'october',
        'november',
        'december'
      ]

    constructor(private router: Router, private activatedRouted: ActivatedRoute, private finhubService: FinhubService) {
    }

    public ngOnInit(): void {
        this.symbol = this.activatedRouted.snapshot.paramMap.get('id') ?? '';
        if (!this.symbol) {
            this.router.navigate(['']);
        } else {
            /*this.getHistory(this.symbol).subscribe((result: MonthHistory[]) => {
                this.history = result;
            })*/
            this.getHistory(this.symbol)
        }
    }

    public goBack(): void {
        this.router.navigate(['']);
    }


    public getHistory(id: string): void {
        const fromDate = new Date();
        const toDate = new Date();
        fromDate.setMonth(fromDate.getMonth() - 3);
        toDate.setMonth(toDate.getMonth() - 1);

        const formatFromDate:string = formatDate(fromDate, 'yyyy-MM-dd', 'en');
        const formatToDate: string = formatDate(toDate, 'yyyy-MM-dd', 'en');

        this.finhubService.getHistory(id, formatFromDate, formatToDate).subscribe(result =>
        {
            this.history = result
        });
    }

    public getMonth(index: number) {
        return this.months[index].toUpperCase()
    }

}
