import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {

  @Input() article!: Article;
  @Output() articleChange = new EventEmitter<Article>();

  constructor() { }

  ngOnInit(): void {
  }

  updateArticle(title: string, content: string): void{
    this.article.title = title;
    this.article.content = content;
    this.articleChange.emit(this.article);
  }
}
