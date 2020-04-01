import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Post } from '../models/post.module';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpTesterService {

  private url: string = `${environment.apiUrl}`

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(this.url);
  }

  getPostsAsResponse(): Observable<HttpResponse<Response>> {
    return this.http.get<Response>(this.url,
      { observe: 'response' });
  }

  getPostUseNext(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(this.url);
  }

  getPostUseObs(): Observable<Array<Post>>{
    return this.http.get<Array<Post>>(this.url);
  }

  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(this.url + '/' + id);
  }

  getPostByUser(userId: number): Observable<Array<Post>> {
    const myParameter = new HttpParams().set('userId', userId.toString());
    return this.http.get<Array<Post>>(this.url, { params: myParameter });
  }

  createPost(post: Post): Observable<Post> {
    return this.http.post(this.url, post);
  }

  updatePost(post: Post): Observable<Post> {
    return this.http.put(this.url + '/' + post.id, post);
  }

  deletePost(id: number): Observable<Post> {
    return this.http.delete(this.url + '/' + id);
  }

  changePost(post: Post): Observable<Post> {
    return this.http.patch(this.url + '/' + post.id, post);
  }
}
