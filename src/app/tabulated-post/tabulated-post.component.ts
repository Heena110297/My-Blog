import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { CommentsService } from '../services/comments.service';
import { Comment } from '../models/comment.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';


@Component({
  selector: 'app-tabulated-post',
  templateUrl: './tabulated-post.component.html',
  styleUrls: ['./tabulated-post.component.css']
})
export class TabulatedPostComponent implements OnInit {

  commentsForm = new FormGroup({
    comment: new FormControl(null, [Validators.required, Validators.minLength(50)])
  });

  dataSource: MatTableDataSource<Comment>;

  displayedColumns = ['Description', 'Likes', 'Date','Action'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  @ViewChild(FormGroupDirective) formDirective: FormGroupDirective;

  constructor(private commentService: CommentsService) { }

  ngOnInit(): void {
    this.getComments();
    this.dataSource.paginator = this.paginator;
  }

  getComments(){
     this.commentService.getComments().subscribe((allComments) => {
       const sortedComments = allComments.sort((a , b ) => {
         return <any>new Date (b.date) - <any>new Date(a.date);
       });
       this.dataSource = new MatTableDataSource(sortedComments);
     });
  }

  postComment() {
    this.commentService.postComment(this.commentsForm.value.comment);
    this.getComments();
    this.dataSource.paginator = this.paginator;
    this.formDirective.resetForm();
  }

  increaseLikes(id: number) {
    console.log(id);
    this.commentService.increaseNumberOfLikes(id);
    console.log(this.dataSource);
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
}
