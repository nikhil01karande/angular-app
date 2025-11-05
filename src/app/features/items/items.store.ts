import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { HttpClient } from '@angular/common/http';
import {tap} from 'rxjs';

interface ItemsState {
  items: any[];
  loading: boolean;
  error: string | null;
}

@Injectable()
export class ItemsStore extends ComponentStore<ItemsState> {
  constructor(private http: HttpClient) {
    super({
      items: [],
      loading: false,
      error: null,
    });
  }

  items$ = this.select(s => s.items);
  loading$ = this.select(s => s.loading);
  error$ = this.select(s => s.error);

  loadItems = this.effect<void>((trigger$) =>
    trigger$.pipe(
      tap(() => {
        this.patchState({ loading: true, error: null });
        this.http.get<any[]>("https://jsonplaceholder.typicode.com/posts")
          .subscribe({
            next: items => this.patchState({ items, loading: false }),
            error: () => this.patchState({ error: 'Failed to load items', loading: false })
          });
      })
    )
  );
}
