import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Post } from '../models/post.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpTesterService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts');
  }

  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/' + id);
  }

  getPostByUser(userId: number): Observable<Array<Post>> {
    const myParameter = new HttpParams().set('userId',userId.toString());
    return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts', {params: myParameter});
  }
}
