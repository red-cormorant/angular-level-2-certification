import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Quote} from "../models/quote";
import {MonthHistory} from "../models/month-history";

@Injectable({
    providedIn: 'root'
})
export class FinhubService {

    constructor(private httpClient: HttpClient) {
    }

    private apiURL: string = "https://finnhub.io/api/v1/";
    private token: string = "&token=bu4f8kn48v6uehqi3cqg";

    private quoteURL: string = "quote?symbol=";
    private companyProfileURL: string = "/stock/profile2?symbol=";
    private historyURL: string = '/stock/insider-sentiment?symbol=';

    public getQuote(symbol: string): Observable<Quote> {
        return this.httpClient.get<Quote>(this.apiURL + this.quoteURL + symbol + this.token);
    }

    public getCompanyName(symbol: string): Observable<string> {
        return this.httpClient.get(this.apiURL + this.companyProfileURL + symbol + this.token).pipe(map((data:{[key: string]: string}) => data.name))
    }
    
    public getHistory(symbol: string, from: string, to: string): Observable<MonthHistory[]> {
        return this.httpClient.get<{data: MonthHistory[]}>(this.apiURL + this.historyURL + symbol + `&from=${from}&to=${to}` + this.token).pipe(map(result => result.data));
    }

}
