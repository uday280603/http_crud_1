import { Component, OnInit } from '@angular/core';
import { log } from 'console';
import { PostService } from 'src/app/shared/service/post.service';
import { SpinnerService } from 'src/app/shared/service/spinner.service';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {

  getAllPosts !: any

  constructor(private _postService : PostService
    ,private _spinnerService : SpinnerService
  ) { }

  ngOnInit(): void {
    this.getAll()
  }


  getAll(){
    this._postService.fetchAllPosts().subscribe({
      next : data =>{
        this.getAllPosts = data;
        // this._spinnerService.emitLodingFlag(true);
      },
      error : err =>{
        // console.log(err);
        //  this._spinnerService.emitLodingFlag(true);
        
      }
    })

 
  }


   trackByFun(index: number, post: any): string {
  return post.id;
}
}
