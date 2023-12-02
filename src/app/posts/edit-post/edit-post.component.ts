import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/Store/app.state';
import { Post } from 'src/app/model/post.model';
import { getPostById } from '../state/post.selector';
import { UPDATE_DATA } from '../state/posts.action';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
})
export class EditPostComponent implements OnInit, OnDestroy {
  post!: Post | null;
  postSubscription$!: Subscription;
  formGroup!: FormGroup;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.postSubscription$ = this.store
        .select(getPostById, { id })
        .subscribe((post) => {
          this.post = post ?? null;
          this.createForm();
        });
    });
  }

  createForm() {
    this.formGroup = new FormGroup({
      title: new FormControl(this.post ? this.post.title : '', [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(this.post ? this.post.description : '', [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  onUpdate() {
    const updatedPost: Post = {
      id: this.post ? this.post.id : undefined,
      title: this.formGroup.value.title,
      description: this.formGroup.value.description,
    };
    this.store.dispatch(UPDATE_DATA({ updatedData: updatedPost }));
    this.router.navigateByUrl('/posts');
  }

  ngOnDestroy(): void {
    if (this.postSubscription$) {
      this.postSubscription$.unsubscribe();
    }
  }
}
