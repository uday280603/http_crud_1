import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  POST_BASE_URL: string = environment.base_url;
  POST_URL = `${this.POST_BASE_URL}/posts.json`;

  constructor(private _httpClient: HttpClient) {}

  fetchAllPosts()  : Observable<any>{
    return this._httpClient.get(this.POST_URL).pipe(
      map((obj: any) => {
        let postArry: Array<any> = [];
        for (const key in obj) {
          postArry.push({ ...obj[key], id: key });
        }
        return postArry
      }),
    );
  }

  fetchPostById(id : string) : Observable<any>{
   let GET_URL= `${this.POST_BASE_URL}/posts/${id}.json`
   return this._httpClient.get(GET_URL);
  }

  createPost(postDeatils : any) : Observable<any>{
    return this._httpClient.post(this.POST_URL,postDeatils);
  }

  updateBlog(post : any): Observable<any>{
    let UPDATE_URL = `${this.POST_BASE_URL}/posts/${post.id}.json`;
     return this._httpClient.patch(UPDATE_URL,post);
  }

  removePost(id : string): Observable<any>{
    let REMOVE_URL = `${this.POST_BASE_URL}/posts/${id}.json`;
    return this._httpClient.delete(REMOVE_URL);
  }
}
