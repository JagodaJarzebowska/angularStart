import { Component, OnInit } from '@angular/core';
import { HttpTesterService } from './http-tester.service';
import { Post } from '../models/post.module';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-http-tester',
  templateUrl: './http-tester.component.html',
  styleUrls: ['./http-tester.component.css']
})
export class HttpTesterComponent implements OnInit {


  allPosts$: Observable<Array<Post>>;

  private postSub = new BehaviorSubject<Array<Post>>([]); 
  postsObs$ = this.postSub.asObservable();


  myPosts;
  singlePost;

  constructor(private httpTesterService: HttpTesterService) {
    this.getPostUseObs();
   }

  ngOnInit(): void {
    
  }
 /**
  * use next and BehaviorSubject !!! 
  */
  getPostUseObs(){
    this.httpTesterService.getPostUseObs().subscribe( result => {
      this.postSub.next(result);
      this.allPosts$ = this.postsObs$;
    })
  }

  getPostUseNext(){
    this.httpTesterService.getPostUseNext().subscribe(result => {
      this.postSub.next(result);
      console.log(this.postSub.value);
    })
  }

  display(){

    this.allPosts$ = this.httpTesterService.getPosts();
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
