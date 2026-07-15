import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { log } from 'console';
import { PostService } from 'src/app/shared/service/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent implements OnInit {
  postForm!: FormGroup;
  isInEditMode: boolean = false;
  postId!: string;
  postObj!: any;

  constructor(
    private _postService: PostService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.createPostForm();
    this.onPatchData();
  }

  createPostForm() {
    this.postForm = new FormGroup({
      userId: new FormControl(1, [Validators.required]),
      title: new FormControl(null, [Validators.required]),
      body: new FormControl(null, [Validators.required]),
    });
  }

  onPostSubmit() {
    if (this.postForm.valid) {
      let POST_OBJ = { ...this.postForm.value };
      this._postService.createPost(POST_OBJ).subscribe({
        next: (data: any) => {
          this._router.navigate(['post']);
        },
        error: (err) => {
          console.log(err);
        },
      });
    } else {
      this.postForm.markAllAsTouched();
    }
  }

  onPatchData() {
    this.postId = this._activatedRoute.snapshot.paramMap.get('id')!;
    if (this.postId) {
      this._postService.fetchPostById(this.postId).subscribe({
        next: (data) => {
          this.isInEditMode = true;
          this.postForm.patchValue(data);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  onUpdatePost(){
        if (this.postForm.valid) {
      let UPDATED_POST = { ...this.postForm.value , id: this.postId};
      this._postService.updateBlog(UPDATED_POST).subscribe({
        next: (data: any) => {
          this._router.navigate(['post']);
          this.isInEditMode = false
        },
        error: (err) => {
          console.log(err);
        },
      });
    } else {
      this.postForm.markAllAsTouched();
    }

  }
}
