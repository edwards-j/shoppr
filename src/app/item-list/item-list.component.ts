import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  currentStore: string;
  newItemName: string = '';
  items: Item[];

  ngOnInit() {
    this.currentStore = this.route.snapshot.params.store;
    this.getItems();
  }

  saveItem() {
    let newItem: Item = {
      name: this.newItemName,
      quantity: 1,
      store: this.currentStore
    }
    this.dataService.saveItem(newItem);
    this.getItems();
  }

  getItems() {
    this.items = this.dataService.getItems(this.currentStore);
  }

}

export class Item {
  name: string;
  quantity: number;
  store: string;
}
