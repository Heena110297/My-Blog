import { Component, OnInit, Input } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private commentsService: CommentsService) { }

  @Input() comment;
  ngOnInit(): void {
  }

  increaseLikes(id: number) {
    this.commentsService.increaseNumberOfLikes(id);
  }

  deleteComment(id: number){

  }
}
