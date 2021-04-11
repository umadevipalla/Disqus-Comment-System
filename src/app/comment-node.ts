export class CommentNode {
    text = '';
    autherName = '';
    authorImage = '';
    time: Date;
    numberOfLikes: number;
    numberOfDisLikes: number;
    anwsers: CommentNode[] = [];
    isOpen: false;
    constructor(text: string, autherName: string, authorImage: string, time: Date, numberOfLikes: number, numberOfDisLikes: number) {
      this.text = text;
      this.autherName = autherName;
      this.authorImage = authorImage;
      this.time = time;
      this.numberOfLikes = numberOfLikes;
      this.numberOfDisLikes = numberOfDisLikes;
    }

    addAnwser(newComment: CommentNode) {
      if (newComment.text) {
        this.anwsers.push(newComment);
      }
    }

    removeComment(newComment: CommentNode) {
      const index = this.anwsers.indexOf(newComment);
      if (index) {
        this.anwsers.slice(index, 1);
      }
    }
  }
