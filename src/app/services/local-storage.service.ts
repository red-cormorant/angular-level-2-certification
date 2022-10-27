import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {
    constructor() {
    }

    public getItemsFromLocalStorage(key: string): string[] {
        return JSON.parse(localStorage.getItem(key));
    }

    public setItemToLocalStorage(key: string, data: string): void {
        let array = this.getItemsFromLocalStorage(key) ?? [];
        const foundIndex = array.findIndex(item => item.toLowerCase() === data.toLowerCase());
        if (foundIndex >= 0) {
            array[foundIndex] = data;
        } else {
            array.push(data);
            localStorage.setItem(key, JSON.stringify(array));
        }
    }

    public removeItemFromLocalStorage(key: string, id: string): void {
        const currentSymbols: string[] = this.getItemsFromLocalStorage(key);
        const index: number = currentSymbols.findIndex(item => item === id)
        if (index >= 0) {
            currentSymbols.splice(index, 1);
        }
        localStorage.setItem(key, JSON.stringify(currentSymbols));
    }
}
