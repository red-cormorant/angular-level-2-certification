import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  public getItemFromLocalStorage(key: string): string[] {
    return JSON.parse(localStorage.getItem(key));
  }

  public setItemToLocalStorage(key: string, data: string): void {
    let array = this.getItemFromLocalStorage(key) ?? [];
    const foundIndex = array.findIndex(item => item.toLowerCase() === data.toLowerCase());
    if(foundIndex >= 0) {
      array[foundIndex] = data;
    }
    else {
      array.push(data);
      localStorage.setItem(key, JSON.stringify(array));
    }
  }
}
