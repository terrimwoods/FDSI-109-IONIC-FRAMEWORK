import { Injectable } from '@angular/core';
import { Post } from '../models/post';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  allPost = [];

  constructor() { }

  sendPost(post){
    this.allPost.push(post);

  }

  getAllPosts(){
    return this.allPost;

  }

}
