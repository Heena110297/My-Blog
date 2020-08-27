import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { CommentsService } from '../services/comments.service';
import { Comment } from '../models/comment.model';

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

  @ViewChild(FormGroupDirective) formDirective: FormGroupDirective;

  ngOnInit(): void {
    this.getComments();
  }

  postComment(){
    this.commentsService.postComment(this.commentsForm.value.comment);
    this.getComments();
    this.formDirective.resetForm();
  }

   getComments(){
     return this.commentsService.getComments().subscribe((allComments) => {
       this.comments = allComments.sort((a, b) => {
        return <any>new Date(b.date) - <any>new Date(a.date);
      });
     });
   }

  getErrorMessageForComment(){
    if (this.commentsForm.get('comment').hasError('required')) {
    return 'Comment cannot be empty';
    }
    else if (this.commentsForm.get('comment').hasError('minlength')){
      return 'Minimum number of charcters should be 50';
    }
    else
    {
      return 'Invalid Comment';
    }
  }

  increaseLikes(id: number)
  {
     this.commentsService.increaseNumberOfLikes(id);
  }
}
