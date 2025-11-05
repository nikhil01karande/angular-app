import { Component, OnInit } from '@angular/core';
import { ItemsStore } from '../items.store';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [ItemsStore]
})
export class ListComponent implements OnInit {

  items$ = this.store.items$;
  loading$ = this.store.loading$;
  error$ = this.store.error$;

  constructor(private store: ItemsStore) { }

  ngOnInit() {
    this.store.loadItems(); 
  }
}
