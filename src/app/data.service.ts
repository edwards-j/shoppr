import { Injectable } from '@angular/core';
import { stringify } from 'querystring';
import { Store } from './store-list/store-list.component';
import { Item } from './item-list/item-list.component';

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

  saveItem(newItem: Item){
    let currentItems: Item[] = JSON.parse(localStorage.getItem("items")) || [];
    currentItems.push(newItem);
    localStorage.setItem("items", JSON.stringify(currentItems));
  }

  getItems(currentStore: string) {
    let allItems: Item[] = JSON.parse(localStorage.getItem("items"));
    let currentItems: Item[] = allItems.filter(i => i.store === currentStore)
    return currentItems;

  }

}

