import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent implements OnInit {

  stores: string[] = [];
  newStoreName: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getStores()
  }

  saveStore() {
    this.dataService.saveStore(this.newStoreName);

    this.getStores()
  }

  deleteStore(store: string) {
    this.dataService.deleteStore(store)
    this.getStores()
  }

  getStores() {
    this.stores = this.dataService.getStores();
  }
  
}

  export class Store {
    id: number;
    name: string;
  }