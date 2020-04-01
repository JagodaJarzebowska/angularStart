import { Component, OnInit } from '@angular/core';
import { HttpTesterService } from './http-tester.service';
import { Post } from '../models/post.module';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-http-tester',
  templateUrl: './http-tester.component.html',
  styleUrls: ['./http-tester.component.css']
})
export class HttpTesterComponent implements OnInit {


  // allPost$: Observable<Array<Post>>;

  myPosts;
  singlePost;

  constructor(private httpTesterService: HttpTesterService) { }

  ngOnInit(): void {
  }

  getPosts() {
    this.httpTesterService.getPosts().subscribe(result => {
      this.myPosts = result;
      console.log(this.myPosts);
    },
    (error: HttpErrorResponse) => {
      console.log(error.status);
    })
  }

  getPostsAsRrsponse() {
    this.httpTesterService.getPostsAsResponse().subscribe(result => {
      this.myPosts = result;
      console.log(this.myPosts.body);
    },
    (error: HttpErrorResponse) => {
      console.log(error.status);
    })
  }


  getPost() {
    this.httpTesterService.getPostById(1).subscribe(result => {
      this.singlePost = result;
      console.log(this.singlePost);
    })
  }

  getPostByUser() {
    this.httpTesterService.getPostByUser(1).subscribe(result => {
      console.log(result);
    })
  }


  createPost() {
    const post: Post = ({
      userId: 1,
      id: null,
      title: 'First post',
      body: 'angulat :)'
    });
    this.httpTesterService.createPost(post).subscribe(result => {
      console.log(result);
    });
  }

  /**
   * update object
   */
  updatePost() {
    const post: Post = ({
      userId: 1,
      id: 1,
      title: 'Modification',
      body: 'new body'
    });
    this.httpTesterService.updatePost(post).subscribe(result => {
      console.log(result);
    });
  }


  deletePost() {
    this.httpTesterService.deletePost(1).subscribe(result => {
      console.log(result);
    })
  }

  /**
   * change one field in object
   */
  changePost() {
    const post: Post = ({
      id: 1,
      body: 'new change body'
    });
    this.httpTesterService.changePost(post).subscribe(result => {
      console.log(result);
    })
  }

}
