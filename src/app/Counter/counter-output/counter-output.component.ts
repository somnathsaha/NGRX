import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/Store/app.state';
import { getCount } from '../State/counter.selector';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit {
  counter$!: Observable<number>;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.counter$ = this.store.select(getCount);
  }
}
