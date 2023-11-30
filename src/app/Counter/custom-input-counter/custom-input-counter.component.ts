import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/Store/app.state';
import { changeChannelName, customIncrement } from '../State/counter.action';
import { getChannel } from '../State/counter.selector';

@Component({
  selector: 'app-custom-input-counter',
  templateUrl: './custom-input-counter.component.html',
  styleUrls: ['./custom-input-counter.component.css'],
})
export class CustomInputCounterComponent implements OnInit {
  value!: number;
  channnelName$!: Observable<string>;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.channnelName$ = this.store.select(getChannel);
  }

  onAdd(): void {
    this.store.dispatch(customIncrement({ customdata: +this.value }));
  }

  onChangeChannelName(): void {
    this.store.dispatch(changeChannelName());
  }
}
