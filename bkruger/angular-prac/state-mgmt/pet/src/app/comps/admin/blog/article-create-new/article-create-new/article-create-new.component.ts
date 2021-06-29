import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article/article';

@Component({
  selector: 'app-article-create-new',
  templateUrl: './article-create-new.component.html',
  styleUrls: ['./article-create-new.component.css']
})
export class ArticleCreateNewComponent implements OnInit {
  article: Article = { id: 0, title:'', date: new Date, 
            author: '', tldr: [''], content: [''], 
            level:'', likes:0, dislikes:0, visits:0 };

  constructor() { }

  ngOnInit(): void {
  }

  submit(): void{
    console.log(JSON.stringify(this.article));
  }

}
