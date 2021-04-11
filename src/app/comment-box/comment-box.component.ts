import { Component, Input, OnInit } from '@angular/core';
import { CommentNode } from '../comment-node';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.scss']
})
export class CommentBoxComponent implements OnInit {

  @Input() comments: CommentNode[] = [];
  text: string;

  constructor() { }

  ngOnInit() {

  }

  addComment(comment: CommentNode) {
    const image = '../assets/person-icon.png';
    comment.addAnwser(new CommentNode(this.text, 'Uma', image, new Date(), 0, 0));
    comment.isOpen = false;
    this.text = '';
  }

  openCommentText(comment) {
    comment.isOpen = !comment.isOpen;
  }

  remove(comment: CommentNode) {
    const index = this.comments.indexOf(comment);
    this.comments = this.comments.splice(index, 1);
  }

  getNumberOfLikes(comment) {
    comment.numberOfLikes++;
  }

  getNumberOfDisLikes(comment) {
    comment.numberOfDisLikes++;
  }

}

