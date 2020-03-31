import { Component, OnInit } from '@angular/core';
import { HttpTesterService } from './http-tester.service';

@Component({
  selector: 'app-http-tester',
  templateUrl: './http-tester.component.html',
  styleUrls: ['./http-tester.component.css']
})
export class HttpTesterComponent implements OnInit {

  myPosts;
  singlePost;

  constructor(private httpTesterService: HttpTesterService) { }

  ngOnInit(): void {
  }

  getPosts(){
    this.httpTesterService.getPosts().subscribe( result => {
      this.myPosts = result;
      console.log(this.myPosts);
    })
  }


  getPost(){
    this.httpTesterService.getPostById(1).subscribe(result => {
        this.singlePost = result;
        console.log(this.singlePost);
    })
  }

  getPostByUser(){
    this.httpTesterService.getPostByUser(1).subscribe(result => {
      console.log(result);
    })
  }

}
