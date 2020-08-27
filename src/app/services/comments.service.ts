import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import { of } from 'rxjs';
import { Comment } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  comments: Comment[] = [
    { id: 1, comment: 'Awesome work! go go go 1', date: new Date('2019-05-01T18:30:00.000Z'), likes: 2 },
    { id: 2, comment: 'Awesome work! go go go 2 ', date: new Date('2019-06-01T18:30:00.000Z'), likes: 5 },
    { id: 3, comment: 'Awesome work! go go go 3', date: new Date('2019-07-01T18:30:00.000Z'), likes: 3 },
    { id: 4, comment: 'Awesome work! go go go 4', date: new Date('2019-08-01T18:30:00.000Z'), likes: 4 },
    { id: 5, comment: 'Awesome work! go go go 5', date: new Date('2019-09-01T18:30:00.000Z'), likes: 6 },
    { id: 6, comment: 'Awesome work! go go go 6', date: new Date('2019-10-01T18:30:00.000Z'), likes: 7 },
    { id: 7, comment: 'Awesome work! go go go 7', date: new Date('2019-11-01T18:30:00.000Z'), likes: 8 },
    { id: 8, comment: 'Awesome work! go go go 8', date: new Date('2019-12-01T18:30:00.000Z'), likes: 9 },
    { id: 9, comment: 'Awesome work! go go go 9', date: new Date('2019-01-01T18:30:00.000Z'), likes: 1 },
    { id: 10, comment: 'Awesome work! go go go 10', date: new Date('2019-02-01T18:30:00.000Z'), likes: 10 },
    { id: 11, comment: 'Awesome work! go go go 11', date: new Date('2019-03-01T18:30:00.000Z'), likes: 50 },
  ];

  constructor() { }

  getComments(): Observable<Comment[]>{
    return of(this.comments);
  }

  increaseNumberOfLikes(id: number){
   const newLikes = (this.comments.find(x => x.id === id)).likes + 1;
   this.comments.find(x => x.id === id).likes = newLikes;
  }

  postComment(newComment: string){
    const todayDate = new Date();
    const comment: Comment = {
      id: todayDate.getDay() + todayDate.getMonth() + todayDate.getFullYear(),
      date: todayDate,
      comment: newComment,
      likes: 0
    };
    this.comments.push(comment);
   }
}
