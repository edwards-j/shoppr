import { Injectable } from '@angular/core';
import { stringify } from 'querystring';
import { Store } from './store-list/store-list.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  saveStore(storeToAdd: string) {
    let currentStores: string[] = JSON.parse(localStorage.getItem("stores")) || [];
    currentStores.push(storeToAdd);
    localStorage.setItem("stores", JSON.stringify(currentStores));
  }

  getStores() {
    return JSON.parse(localStorage.getItem("stores"));
  }

  deleteStore(store: string) {
    let currentStores: string[] = JSON.parse(localStorage.getItem("stores"));

    let index = currentStores.indexOf(store);

    currentStores.splice(index, 1);

    localStorage.setItem("stores", JSON.stringify(currentStores));
  }

}

