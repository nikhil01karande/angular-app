import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { HttpClient } from '@angular/common/http';
import { switchMap, tap } from 'rxjs';

export interface Item {
  id: number;
  name: string;
  description: string;
}

interface ItemsState {
  items: Item[];
  loading: boolean;
  error: string | null;
}

@Injectable()
export class ItemsStore extends ComponentStore<ItemsState> {

  constructor(private http: HttpClient) {
    super({
      items: [],
      loading: false,
      error: null
    });
  }

  items$ = this.select(s => s.items);
  loading$ = this.select(s => s.loading);
  error$ = this.select(s => s.error);

  loadItems = this.effect<void>((trigger$) =>
    trigger$.pipe(
      tap(() => this.patchState({ loading: true, error: null })),
      switchMap(() =>
        this.http.get<Item[]>("https://mocki.io/v1/55b2d75b-6b5b-4e67-a66e-2530f555d2eb")
      ),
      tap({
        next: (items) => this.patchState({ items, loading: false }),
        error: () => this.patchState({ error: 'Failed to load items', loading: false })
      })
    )
  );
}
