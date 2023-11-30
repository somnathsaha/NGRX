import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/Store/app.state';
import { Post } from 'src/app/model/post.model';
import { POST_DATA } from '../state/posts.action';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  formdata!: FormGroup;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.formdata = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  onAddPost() {
    const postData: Post = {
      description: this.formdata.value.title ?? 'Default Title',
      title: this.formdata.value.description ?? 'Default Description',
      id: Math.random(),
    };

    this.store.dispatch(POST_DATA({ postData }));
  }
}
