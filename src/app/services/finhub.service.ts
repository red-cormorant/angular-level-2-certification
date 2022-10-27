import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Qoute} from "../models/qoute";

@Injectable({
    providedIn: 'root'
})
export class FinhubService {

    constructor(private httpClient: HttpClient) {
    }

    private apiURL: string = "https://finnhub.io/api/v1/";
    private token: string = "&token=bu4f8kn48v6uehqi3cqg";

    private quoteURL: string = "quote?symbol=";
    private companyProfileURL: string = "stock/profile2?symbol=";

    public getQuote(symbol: string): Observable<Qoute> {
        return this.httpClient.get<Qoute>(this.apiURL + this.quoteURL + symbol + this.token);
    }

    public getCompanyName(symbol: string): Observable<string> {
        return this.httpClient.get(this.apiURL + this.companyProfileURL + symbol + this.token).pipe(map((data:{[key: string]: string}) => data.name))
    }

}
