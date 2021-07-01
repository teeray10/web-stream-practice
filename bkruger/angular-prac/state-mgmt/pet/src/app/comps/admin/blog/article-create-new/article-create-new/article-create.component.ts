import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Article } from 'src/app/model/article/article';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css']
})
export class ArticleCreateComponent implements OnInit {
  article: Article = { id: 0, title:'', date: new Date, 
            author: '', tldr: [''], content: [''], 
            level:'', likes:0, dislikes:0, visits:0 };
  level = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

  submit(): void{
    console.log(JSON.stringify(this.article));
  }

}
