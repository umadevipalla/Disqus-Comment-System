import { Component } from '@angular/core';
import { CommentNode } from './comment-node';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  comments: Array<CommentNode> = [];
  constructor() {
    const image = '../assets/person-icon.png';
    this.comments =  [new CommentNode('First', 'Uma', image, new Date(), 0, 0)];
  }
}
