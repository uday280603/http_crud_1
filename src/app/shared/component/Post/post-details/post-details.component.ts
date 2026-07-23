import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, ActivationEnd, Params, Router } from '@angular/router';
import { log } from 'console';
import { PostService } from 'src/app/shared/service/post.service';
import { GetConfirmComponent } from '../../Basic/get-confirm/get-confirm.component';
import { SnackbarService } from 'src/app/shared/service/snackbar.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit {
  postId!: string;
  postObj!: any;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _postService: PostService,
    private _router: Router,
    private _matDialog: MatDialog,
    private _snackbar : SnackbarService
  ) {}

  ngOnInit(): void {
    this.getPost();
  }

  getPost() {
    // this.postId = this._activatedRoute.snapshot.paramMap.get('id')!;
    // if (this.postId) {
    //   this._postService.fetchPostById(this.postId).subscribe({
    //     next: (data) => {
    //       this.postObj = data;
    //     },
    //     error: (err) => {
    //       console.log(err);
    //     },
    //   });
    // }
    this._activatedRoute.params.subscribe((params: Params) => {
      this.postId = params['id'];
      if (this.postId) {
        this._postService.fetchPostById(this.postId).subscribe({
          next: (data) => {
            this.postObj = data;
          },
          error: (err) => {
            console.log(err);
          },
        });
      }
    });
  }

  onRemove() {
    let config = new MatDialogConfig();
    config.width = '450px';
    config.disableClose = true;
    config.data = `Are you sure to remove the post with id ${this.postId}..?`
    let _matRef = this._matDialog.open(GetConfirmComponent, config);
    _matRef.afterClosed().subscribe((c) => {
      if (c) {
        this._postService.removePost(this.postId).subscribe({
          next: (data) => {
            this._router.navigate(['post']);
            this._snackbar.openSnackbar(`The post with id ${this.postId} is removed successfully..!`)
          },
          error: (err) => {
            console.log(err);
          },
        });
      }
    });
  }
}
