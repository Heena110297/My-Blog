import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { CommentsService } from '../services/comments.service';
import { Comment } from '../models/comment.model';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private commentsService: CommentsService) { }

  commentsForm = new FormGroup({
    comment: new FormControl(null, [Validators.required, Validators.minLength(50)])
  });
  comments: Comment[] = [];
  paginatedComments: Comment[] = [];
  numberOfComments = 0;

  @ViewChild(FormGroupDirective) formDirective: FormGroupDirective;



  ngOnInit(): void {
    this.getComments();
    this.numberOfComments = this.commentsService.getNumberOfComments();
    this.getPaginatedComments(0, 10);
  }

  postComment() {
    this.commentsService.postComment(this.commentsForm.value.comment);
    this.getComments();
    this.getPaginatedComments(0, 10);
    this.numberOfComments = this.commentsService.getNumberOfComments();
    this.formDirective.resetForm();
  }

  getComments() {
    return this.commentsService.getComments().subscribe((allComments) => {
      this.comments = allComments.sort((a, b) => {
        return <any>new Date(b.date) - <any>new Date(a.date);
      });
    });
  }

  getErrorMessageForComment() {
    if (this.commentsForm.get('comment').hasError('required')) {
      return 'Comment cannot be empty';
    }
    else if (this.commentsForm.get('comment').hasError('minlength')) {
      return 'Minimum number of charcters should be 50';
    }
    else {
      return 'Invalid Comment';
    }
  }

  increaseLikes(id: number) {
    this.commentsService.increaseNumberOfLikes(id);
  }

  getPaginatedComments(pageNumber, pageSize) {
    let start;
    let end;
    if (pageNumber === 0) {
      start = 0;
      end = pageSize;
    }
    else{
      start = ((pageNumber) * pageSize);
      end = ((pageNumber + 1) * pageSize );
    }
    this.paginatedComments = this.comments.slice(start, end);
    console.log(this.paginatedComments);
  }

  onPageChange(pageChangeEvent: PageEvent) {
    console.log(pageChangeEvent.pageIndex,pageChangeEvent.pageSize);
    this.getPaginatedComments(pageChangeEvent.pageIndex, pageChangeEvent.pageSize);
  }
}
