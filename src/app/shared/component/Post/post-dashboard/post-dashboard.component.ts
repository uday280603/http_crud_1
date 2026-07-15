import { Component, OnInit } from '@angular/core';
import { log } from 'console';
import { PostService } from 'src/app/shared/service/post.service';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {

  getAllPosts !: any

  constructor(private _postService : PostService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this._postService.fetchAllPosts().subscribe({
      next : data =>{
        this.getAllPosts = data;
      },
      error : err =>{
        console.log(err);
        
      }
    })
  }

}
