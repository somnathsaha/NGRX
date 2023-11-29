import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/Store/app.state';
import { Post } from 'src/app/model/post.model';
import { getPost } from './state/post.selector';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  constructor(private store: Store<AppState>) {}
  posts$!: Observable<Post[]>;
  ngOnInit(): void {
    this.posts$ = this.store.select(getPost);
  }
}
